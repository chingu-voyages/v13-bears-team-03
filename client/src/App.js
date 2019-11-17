  
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header'
import VehicleList from './components/UserLandingPage/VehicleList'
import './App.css';

export default () => {
  return (
    <BrowserRouter>
      <Header />
          <Route exact path="/landing_page" component={ VehicleList } />
    </BrowserRouter>
  )
}