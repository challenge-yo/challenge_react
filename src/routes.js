import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Routes -- add routes as need here 

import Home from './views/Home/Home'
import Categories from './views/Categories/Categories'
import Challenges from './views/Challenges/Challenges'
import FeaturedView from './views/FeaturedView/Featured'
import Friends from './views/Friends/Friends'
import LoginScreen from'./views/LoginScreen/LoginScreen'



export default (

    <Switch>
        <Route component={ Home } path='/home' />
        <Route component={ Categories } path='/categories' />
        <Route component={ Challenges } path='/challenges' />
        <Route component={ FeaturedView } path='/featured' />
        <Route component={ Friends } path='/friends' />
        <Route component={ LoginScreen } exact path='/' />
    </Switch>

)