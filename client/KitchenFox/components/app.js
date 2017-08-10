import React, { Component } from 'react';
import Signup from './auth/signup';
import SigninContainer from './auth/signin_container';
import Greeting from './auth/greeting';
import { checkLogin } from '../actions/session_actions';

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
    this.props.fetchToken();
  }

  componentWillReceiveProps(newProps) {
    console.warn(JSON.stringify(newProps));
  }

  render() {
    if (this.state.session.token) {
      return (<Signup />);
    } else {
      return (<SigninContainer />);
    }
  }
}

export default App;
