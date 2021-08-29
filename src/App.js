import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop-page/shop-page.component'

function App() {
  return (
    <div >
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
