import React, { Component } from 'react';
import SignupContainer from './auth/signup_container';
import SigninContainer from './auth/signin_container';
import Greeting from './auth/greeting';

import Pantry from '../screens/pantry';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      token: '',
      username: '',
    };
  }

  componentWillMount() {
    this.props.loadLocalUser();
  }

  render() {
    if (this.props.session.token.length) {
      return (<SigninContainer />);
    } else {
      // console.warn(JSON.stringify(this.state));
      // console.warn(JSON.stringify(this.props));
      return (<SignupContainer />);
      // return (<Greeting />);
    }
    return (<SigninContainer />);
  }
}

export default App;
