import React from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';


import HomePage from "./pages/homepage/homepage.component"
import ShopPage from "./pages/shop/shop.component"
import SignInSignUp from "./pages/signinsignup/signinsignup.component"
import Header from "./components/header/header.component"
import { auth } from "./firebase/firebase.util"

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unSubscripeFromAuth = null;

  componentDidMount() {
    this.unSubscripeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unSubscripeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInSignUp} />
          <Route path='/*' component={() => <Redirect to="/" />} />
        </Switch>
      </div>
    );

  }
}

export default App;
