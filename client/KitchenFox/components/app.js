import React, { Component } from 'react';

import Welcome from '../screens/welcome';
import Pantry from '../screens/pantry';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      loggedIn: Boolean(this.props.session.token.length),
    };
  }

  componentWillMount() {
    this.props.fetchFirstName();
    this.props.fetchLastName();
    this.props.fetchToken();
  }

  componentWillReceiveProps(newProps) {
    if (!this.state.loggedIn && newProps.session.token) {
      this.setState({ loggedIn: true });
    }
  }

  render() {
    if (this.state.loggedIn) {
      // return (<Welcome />);

      console.warn(JSON.stringify(this.state));
      console.warn(JSON.stringify(this.props));
      return (<SigninContainer />);
    } else {
      console.warn(JSON.stringify(this.state));
      console.warn(JSON.stringify(this.props));
      return (<SignupContainer />);
      // return (<Greeting />);
    }
    // return (<Pantry />);
  }
}

export default App;
