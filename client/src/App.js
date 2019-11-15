import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import SignIn from './components/Sign-In'
import SignUp from './components/Sign-Up'
import './App.css';

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
      </Switch>
    </BrowserRouter>
  )
}
