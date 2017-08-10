import React, { Component } from 'react';
import SignupContainer from './auth/signup_container';
import SigninContainer from './auth/signin_container';
import Greeting from './auth/greeting';
import { checkLogin } from '../actions/session_actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: Boolean(this.props.session.token.length),
    };
    console.warn(JSON.stringify(this.props));
  }

  componentWillMount() {
    this.props.fetchToken();
  }

  componentWillReceiveProps(newProps) {
    if (!this.state.loggedIn && newProps.session.token) {
      this.setState({ loggedIn: true })
    }
  }

  render() {
    if (this.state.loggedIn) {
      return (<SignupContainer />);
    } else {
      return (<SigninContainer />);
      // return (<Greeting />);
    }
  }
}

export default App;
