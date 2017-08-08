import React, { Component } from 'react';
import {
  View, 
  Text,
} from 'react-native';

import Signup from './auth/signup';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Signup />
    );
  }
}

export default App;
