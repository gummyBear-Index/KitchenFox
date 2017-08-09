import React, { Component } from 'react';
import Signup from './auth/signup';
import Signin from './auth/signin';
import Greeting from './auth/greeting';
import { checkLogin } from '../actions/session_actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      session: {
        token: '',
      },
    }
  }

  componentWillMount() {
    this.props.checkLogin();
  }

  render() {
    return <Greeting />;
    // (this.state.session.token ? <homeIndexPage /> : {Greeting});
  }
}

export default App;
