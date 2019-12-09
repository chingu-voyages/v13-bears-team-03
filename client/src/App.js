  
import React from 'react'
import Header from './components/Header'
import VehicleList from './components/UserLandingPage/VehicleList'
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import { SignUp, SignIn } from './components/Authentication'

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/landing_page" component={ VehicleList } />
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
