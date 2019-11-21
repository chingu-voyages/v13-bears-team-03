import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Header from './components/Header'
import { SignUp, SignIn } from './components/Authentication'
import Account from './components/Account'

export default () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/sign-in">
          <SignIn />
        </Route>
        <Route path="/sign-up">
          <SignUp />
        </Route>
        <Route path="/account">
          <Account />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
