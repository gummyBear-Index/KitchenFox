import React, { Component } from 'react';

import Welcome from '../screens/welcome';
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
      this.setState({ loggedIn: true });
    }
  }

  render() {
    if (this.state.loggedIn) {
      return (<Welcome />);
    }
    return (<Pantry />);
  }
}

export default App;
