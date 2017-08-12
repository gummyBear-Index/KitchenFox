import React, { Component } from 'react';
import SignupContainer from './auth/signup_container';
import SigninContainer from './auth/signin_container';
import BarCodeCamera from './pantry/camera';
import AddItemCard from './pantry/add_item_card';

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
    // return (<AddItemCard/>);
    console.warn('app is loading');
    console.warn(JSON.stringify(this.props));
    // console.warn(JSON.stringify(this.props));
    if (this.props.session.token.length) {
      return (<Pantry />);
    } else {
      return (<Welcome />);
    }
  }
}

export default App;
