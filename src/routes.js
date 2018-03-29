import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Routes -- add routes as need here 

import Home from './views/Home/Home'
import Categories from './views/Categories/Categories'
import Challenges from './views/Challenges/Challenges'
import FeaturedView from './views/FeaturedView/Featured'
import Friends from './views/Friends/Friends'
import LoginScreen from'./views/LoginScreen/LoginScreen'
import Wager from'./views/Wager/Wager'



export default (

    <Switch>
        <Route component={ Home } path='/home' />
        <Route component={ Categories } path='/categories' />
        <Route component={ Challenges } path='/challenges/:Category' />
        <Route component={ FeaturedView } path='/challenge/:id' />
        <Route component={ Friends } path='/friends' />
        <Route component={ Wager } path='/wager/:id' />
        <Route component={ LoginScreen } exact path='/' />
    </Switch>

)