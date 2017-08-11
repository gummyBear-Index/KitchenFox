import React, { Component } from 'react';

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
    if (this.props.session.token.length) {
      return (<SigninContainer />);
    } else {
      // console.warn(JSON.stringify(this.state));
      // console.warn(JSON.stringify(this.props));
      return (<SignupContainer />);
      // return (<Greeting />);
    }
    // return (<Pantry />);
  }
}

export default App;
