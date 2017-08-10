import React, { Component } from 'react';
import Signup from './auth/signup';
import SigninContainer from './auth/signin_container';
import Greeting from './auth/greeting';
import { checkLogin } from '../actions/session_actions';

import Pantry from '../screens/pantry';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {
        token: '',
      },
    };
  }

  componentWillMount() {
    // this.props.checkLogin();
  }

  render() {
    if (this.state.session.token) {
      return (<Pantry />);
    } else {
      return (<Signup />);
    }
  }
}

export default App;
