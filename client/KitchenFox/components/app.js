import React, { Component } from 'react';
import SignupContainer from './auth/signup_container';
import SigninContainer from './auth/signin_container';
import Welcome from '../screens/welcome';
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
    console.warn(JSON.stringify(this.props));
    if (this.props.session.token.length) {
      return (<Pantry />);
    } else {
      return (<Welcome />);
    }
  }
}

export default App;
