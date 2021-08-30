import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop-page/shop-page.component'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component';

function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
