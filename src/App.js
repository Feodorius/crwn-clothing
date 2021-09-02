import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

import { onSnapshot } from '@firebase/firestore';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import HomePage from './components/pages/homepage/homepage.component';
import ShopPage from './components/pages/shop-page/shop-page.component'
import Header from './components/header/header.component';
import SignInAndSignUpPage from './components/pages/sign-in-sign-up/sign-in-sign-up.component';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {

      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        onSnapshot(userRef, snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log(this.state)
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
