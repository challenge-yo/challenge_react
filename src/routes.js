import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Routes -- add routes as need here 

import Home from './views/Home/Home'
import Categories from './views/Categories/Categories'
import Challenges from './views/Challenges/Challenges'
import FeaturedView from './views/FeaturedView/Featured'
import Friend from './views/Friend/Friend'
import Friends from './views/Friends/Friends'
import LoginScreen from './views/LoginScreen/LoginScreen'
import Wager from './views/Wager/Wager'
import Profile from './views/Profile/Profile'
import UserChallenges from './views/UserChallenges/UserChallenges'
import Validate from './views/Validate/Validate'
import { StripeProvider, Elements } from 'react-stripe-elements';





export default (

    <StripeProvider apiKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
        <Elements>
            <Switch>
                <Route component={Home} path='/home' />
                <Route component={Categories} path='/categories' />
                <Route component={Challenges} path='/challenges/:Category' />
                <Route component={FeaturedView} path='/challenge/:id' />
                <Route component={Friends} path='/friends' />
                <Route component={Friend} path='/friend/:id' />
                <Route component={Wager} path='/wager/:id' />
                <Route component={LoginScreen} exact path='/' />
                <Route component={Profile} path='/profile/:id' />
                <Route component={UserChallenges} path='/UserChallenges/' />
                <Route component={Validate} path='/Validate/:id' />
            </Switch>
        </Elements>
    </StripeProvider>
)