require('dotenv').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const { REACT_REDIRECT, REACT_HOME, SERVER_PORT, SERVER_SECRET, SERVER_BASE, DOMAIN, CLIENTID, CLIENT_SECRET, CALLBACK_URL, STRIPE_PRIVATE_KEY } = process.env
const checkForSession = require('./middleware/checkForSessions')
const stripe = require('stripe')(STRIPE_PRIVATE_KEY);

const app = express()

app.use(express.static(`${__dirname}/../build`));

app.listen(SERVER_PORT, () => console.log(`Listening on port: ${SERVER_PORT}`))

app.use(bodyParser.json())

app.use(session({
    secret: SERVER_SECRET,
    resave: false,
    saveUninitialized: true
}))

// REMEMBER - remove middleware... currently in testing mode.

// app.use(checkForSession)

app.use(passport.initialize())

app.use(passport.session())

massive(SERVER_BASE).then(db => {
    app.set('db', db)
})

passport.use(new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENTID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function (accessToken, refreshToken, extraParams, profile, done) {

    const db = app.get('db')
    const { sub, given_name, family_name, name, picture } = profile._json

    db.find_user([sub]).then(response => {
        if (response[0]) {
            done(null, response[0].facebook_id)
        } else {
            db.create_user([sub, name, given_name, family_name, picture]).then(response => {
                db.create_badges([response[0].id]).then(res => console.log('created badges'))
                done(null, response[0].facebook_id)
            })
        }
    })
}))


app.post('/api/payment', (req, res, next) => {

    function joesPennyFunction(amountArray) {
        const pennies = [];
        for (var i = 0; i < amountArray.length; i++) {
            if (amountArray[i] === ".") {
                if (typeof amountArray[i + 1] === "string") pennies.push(amountArray[i + 1]);
                else pennies.push("0");
                if (typeof amountArray[i + 2] === "string") pennies.push(amountArray[i + 2]);
                else pennies.push("0");
                break;
            }
            else pennies.push(amountArray[i]);
        }
        return parseInt(pennies.join(''));
    }


    const charge = stripe.charges.create(
        {
            amount: joesPennyFunction(req.body.amount),
            currency: 'usd',
            source: req.body.token.id,
            description: 'Stripe Elements test charge'
        },
        function (err, charge) {
            if (err) return res.sendStatus(500);
            else return res.status(200).send(charge);
        }
    );
});

passport.serializeUser((id, done) => {
    done(null, id)
})

passport.deserializeUser((id, done) => {
    const db = app.get('db')

    db.find_logged_in_user([id]).then(res => {
        done(null, res[0])
    })
})

app.get('/auth', passport.authenticate('auth0'))

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: REACT_REDIRECT
}))

// REMEMBER - change back to req.user... currently in testing mode.
// change back to req.user if you want to auto log in

app.get('/auth/me', (req, res) => {
    if (!req.user) {
        res.send('Not logged in!')
    } else {
        res.status(200).send(req.user)
    }
})

app.get('/logout', (req, res) => {
    req.logout()
    res.redirect(REACT_HOME)
})

app.get('/api/challenges', function (req, res) {
    app.get('db').get_challenges().then(response => {
        res.status(200).send(response)
    })
})
app.get('/api/categories', function (req, res) {
    app.get('db').get_categories().then(response => {
        res.status(200).send(response)
    })
})
app.get('/api/challengeByCategory/:category', function (req, res) {
    let categoryName = req.params.category
    app.get('db').select_challenges_by_category([categoryName]).then(response => {
        res.status(200).send(response)
    })
})
app.get('/api/specificChallenge/:id', function (req, res) {
    let id = req.params.id
    app.get('db').select_specific_challenge([id]).then(response => {
        res.status(200).send(response)
    })
})

// remember to change back to req.user - just using for styling friend page

app.get('/api/friends', function (req, res) {
    app.get('db').potential_friends([req.user.facebook_id]).then(potential_friends => {
        app.get('db').get_relationships([req.user.facebook_id]).then(relationship => {

            let newFriends = []

            relationship.map(friend_id => {
                newFriends.push(friend_id.facebook_id)
            })

            var validList = potential_friends.filter((item, index) => {
                return !newFriends.includes(item['facebook_id'])
            })

            res.send(validList)
        })
    })  
})

app.get('/api/confirm', function (req, res) {
    app.get('db').confirm_needed([req.user.facebook_id]).then(response => {
        res.status(200).send(response)
    })
})

app.get('/api/verified', function (req, res) {
    app.get('db').confirmed_friends([req.user.facebook_id]).then(response => {
        res.status(200).send(response)
    })
})

app.get('/api/wager/:id', function (req, res) {
    app.get('db').get_wager([req.params.id]).then(response => {
        res.status(200).send(response)
    })
})
app.get('/api/users/:id', function (req, res) {
    app.get('db').get_user_details([req.params.id]).then(response => {
        res.status(200).send(response[0])
    })
})

app.post('/api/addfriend', function (req, res) {
    app.get('db').find_relationship([req.user.facebook_id, req.body.id]).then(response => {
        if (response.length > 0) {
            res.status(200).send('relationship exists')
        } else {
            app.get('db').add_friends([req.user.facebook_id, req.body.id, 0]).then(response => {
                res.status(200).send(response)
            })
        }
    })
})

app.put('/api/confirmfriend', function (req, res) {
    app.get('db').confirm_friends([req.body.id, req.user.facebook_id]).then(response => {
        res.status(200).send(response)
    })
})

app.put('/api/declinefriend', function (req, res) {
    app.get('db').decline_friends([req.body.id, req.user.facebook_id]).then(response => {
        res.status(200).send(response)
    })
})

app.delete('/api/deletefriend/:id', function (req, res) {
    app.get('db').delete_friends([req.user.facebook_id, req.params.id]).then(response => {
        res.status(200).send(response)
    })
})

app.post('/api/newuser', function (req, res) {
    app.get('db').create_user([req.body.profile.sub, req.body.profile.nickname, req.body.profile.given_name, req.body.profile.family_name, req.body.profile.picture, req.body.profile.email, req.body.profile.sub]).then(resp => {
        res.status(200).send(resp)
    })
})
app.get('/api/random', function (req, res) {
    app.get('db').select_random().then(response => {
        res.status(200).send(response)
    })
})

app.get('/api/userChallenges', function (req, res) {
    console.log(req.user.id)
    app.get('db').get_user_challenges([req.user.id]).then(response => {
        res.status(200).send(response)
    })
})
app.post('/api/userChallenges', function (req, res) {
    req.body.user_id = req.user.id
    const { challenge_id, user_id, validator_id, start_time, end_time, users_wager, is_validated, email, currency, customer, source, validation_window } = req.body
    app.get('db').create_user_challenge([challenge_id, user_id, validator_id, start_time, end_time, users_wager, is_validated, email, currency, customer, source, validation_window]).then(response => {
        res.status(200).send('created challenge')
    })
})

app.get('/api/validate/:id', (req, res) => {
    // console.log('user id', req.params.id)
    app.get('db').get_validate_list([req.params.id * 1]).then(dbRes => {
        // console.log(dbRes)
        res.status(200).send(dbRes)
    })
})
app.put('/api/validate/', (req, res) => {
    app.get('db').validate_challenge([req.body.challenge_id * 1]).then(dbRes => {
        res.status(200).send('validated')
    })
})

app.put('/api/badge/', (req, res) => {
    category = req.body.category.toLowerCase()
    let health =0 , finance =0 , education =0, spiritual =0, business =0, social =0, family =0;
    switch (category) {
        case 'health': health = 1; break;
        case 'finance': finance = 1; break;
        case 'education': education = 1; break;
        case 'spiritual': spiritual = 1; break;
        case 'business': business = 1; break;
        case 'social': social = 1; break;
        case 'family': family = 1; break;
        default: console.log(' category switch defaulted'); break;
    }
    app.get('db').update_badges([ req.body.user_id * 1, health, finance, education, spiritual, business, social, family])
    .then(response=>{
            app.get('db').update_user_score([req.body.user_id * 1, req.body.award_amount])
            .then(updateUserScore=>{
            res.status(200).send('validated')
        })
    })
})

// stripe endpoints
app.post('/api/customer', (req, res) => {

    res.status(200).send(req.body)
})
app.post('/api/charge', (req, res) => {

    res.status(200).send(req.body)
})


