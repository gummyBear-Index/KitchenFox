import React, { Component } from 'react';
import SignupContainer from './auth/signup_container';
import SigninContainer from './auth/signin_container';
import Greeting from './auth/greeting';

import Pantry from '../screens/pantry';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: Boolean(this.props.session.token.length),
    };
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
      return (<Pantry />);
    }
    return (<SigninContainer />);
  }
}

export default App;
