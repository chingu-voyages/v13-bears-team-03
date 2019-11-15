import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SignIn from './components/Sign-In'
import SignUp from './components/Sign-Up'
import './App.css';

export default () => {
  return (
    <BrowserRouter>
      <h1>Some fancy header</h1>
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
