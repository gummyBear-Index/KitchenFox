import React, { Component } from 'react';
import Signup from './auth/signup';
import Signin from './auth/signin';
import Greeting from './auth/greeting';
import { checkLogin } from '../actions/session_actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.checkLogin();
  }

  render() {
    if (this.props.currentUser) {
      return (
        <Signin />
      );
    } else {
      return (
        <Signin />
      );
    }
  }
}

export default App;
