require('dotenv').config()
const massive = require('massive')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const passport = require('passport')
const Auth0Strategy = require('passport-auth0')
const { REACT_REDIRECT, REACT_HOME, SERVER_PORT, SERVER_SECRET, SERVER_BASE, DOMAIN, CLIENTID, CLIENT_SECRET, CALLBACK_URL } = process.env

const app = express()

app.use( express.static( `${__dirname}/../build` ) );

app.listen( SERVER_PORT, () => console.log(`Listening on port: ${ SERVER_PORT }`) )

app.use( bodyParser.json() )

app.use( session({
    secret: SERVER_SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use( passport.initialize() )

app.use( passport.session() )

massive( SERVER_BASE ).then( db => {
    app.set('db', db)
})

passport.use( new Auth0Strategy({
    domain: DOMAIN,
    clientID: CLIENTID,
    clientSecret: CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
    scope: 'openid profile'
}, function( accessToken, refreshToken, extraParams, profile, done ) {

    const db = app.get('db')
    const { sub, given_name, family_name, name, picture } = profile._json
    
    db.find_user([sub]).then( response => {
        if (response[0]) {
            done( null, response[0].facebook_id )
        } else {
            db.create_user([sub, name, given_name, family_name, picture]).then( response => {
                done( null, response[0].facebook_id )
            })
        } 
    })
}))

passport.serializeUser( ( id, done ) => {
    done( null, id )
})

passport.deserializeUser( ( id, done ) => {
    const db = app.get('db')

    db.find_logged_in_user([id]).then( res => {
        done( null, res[0] )
    })
})

app.get('/auth', passport.authenticate('auth0') )

app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: REACT_REDIRECT
}))

app.get('/auth/me', ( req, res ) => {
    if (!req.user) {
        res.send( 'Not logged in!' )
    } else {
        res.status(200).send( req.user )
    }
})

app.get('/logout', ( req, res ) => {
    req.logout()
    res.redirect( REACT_HOME  )
})

app.get('/api/challenges', function(req, res){
    app.get('db').get_challenges().then( response => {
        res.status(200).send(response)
    })
})
app.get('/api/categories', function(req, res){
    app.get('db').get_categories().then( response => {
        res.status(200).send(response)
    })
})
app.get('/api/challengeByCategory/:category', function( req, res ) {
    let categoryName = req.params.category
    app.get('db').select_challenges_by_category([categoryName]).then( response => {
        res.status(200).send(response)
    })
})
app.get('/api/specificChallenge/:id', function( req, res ) {
    let id = req.params.id
    app.get('db').select_specific_challenge([id]).then( response => {
        res.status(200).send(response)
    })
})

app.get('/api/friends', function(req, res){
    app.get('db').get_friends().then( response => {
        res.status(200).send(response)
    })
})

app.get('/api/confirm', function(req, res){
    app.get('db').confirm_needed([req.user.facebook_id]).then( response => {
        res.status(200).send(response)
    })
})

app.get('/api/verified', function(req, res){
    app.get('db').verified_friends([req.user.facebook_id]).then( response => {
        res.status(200).send(response)
    })
})
app.get('/api/wager/:id', function(req, res){
    app.get('db').get_wager([req.params.id]).then( response => {
        res.status(200).send(response)
    })
})

app.post('/api/addfriend', function (req, res){
    console.log( req.user )
    app.get('db').add_friends([req.user.facebook_id, req.body.id, 0]).then(response => {
        res.status(200).send(response) 
    })
})

app.put('/api/confirmfriend', function (req, res){
    app.get('db').confirm_friends([ req.body.id, req.user.facebook_id]).then(response => {
        res.status(200).send(response) 
    })
})

app.put('/api/declinefriend', function (req, res){
    app.get('db').decline_friends([req.body.id, req.user.facebook_id]).then(response => {
        res.status(200).send(response) 
    })
})

app.delete('/api/deletefriend', function (req, res){
    app.get('db').delete_friends([req.user.facebook_id, req.body.id]).then(response => {
        res.status(200).send(response) 
    })
})

app.post('/api/newuser', function(req, res) {
    app.get('db').create_user([req.body.profile.sub, req.body.profile.nickname, req.body.profile.given_name, req.body.profile.family_name, req.body.profile.picture, req.body.profile.email, req.body.profile.sub]).then( resp => {
        res.status(200).send(resp)
    })
})

