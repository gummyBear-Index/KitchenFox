import React, { Component } from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Title,
  InputGroup,
  Input,
  Button,
  Spinner,
  Icon,
  View,
  Text,
  Navigator,
} from 'native-base';
// import { StackNavigation } from 'react-navigation'

import SignIn from './signin';
import SignUp from './signup';
import { text } from '../../style/text';
import { button } from '../../style/button';
import { session } from '../../style/layout';
// import { styles } from '../../style/auth/session'

// const ProtectedView = require('./ProtectedView')

class Greeting extends Component {
  // static navigationOptions = {
  //   title: 'Home',
  // }
  constructor(props) {
		super(props);

    this.initialState = {
      email: '',
      password: ''
    }
    this.state = this.initialState;
  }

  // _handleProtectedView = () => {
  //   this.props.navigator.push({
  //     title: 'Protected Content',
  //     component: ProtectedView,
  //     backButtonTitle: 'Back'
  //   })
  // }
  _handleLogOut = () => {
    AsyncStorage.removeItem('jwt');
    alert('You have been logged out.');
  }

  render() {
    const { navigate } = this.props.navigation;

    return(
      <Image
        source={require('../../images/greeting/food-1-.jpg')}
        style={session.container}>
            <Title style={text.titleCenter}>KitchenFox</Title>
          <Button 
            style={button.sessionButton}
            onPress={() => navigate('Signup', {name: 'signup'})}>
            <Text>Sign Up</Text>
          </Button>
          <Button 
            style={button.sessionButton}
            onPress={() => navigate('Signin', {name: 'signin'})}>
            <Text>Sign In</Text>
          </Button>
      </Image>
    );
  }


  // render() {
  //   return (
  //     <Container>
  //     <View style={styles.container}>
  //       <Text>Hello</Text>

  //     //   <TouchableHighlight onPress={this._handleSigninPage}>
  //     //     <Text style={[styles.button, styles.greenButton]}>
  //     //       Sign In
  //     //     </Text>
  //     //   </TouchableHighlight>
  //     //   <TouchableHighlight onPress={this._handleLogOut}>
  //     //     <Text style={[styles.button, styles.greyButton]}>
  //     //       Log Out
  //     //     </Text>
  //     //   </TouchableHighlight>
  //       // <TouchableHighlight onPress={this._handleProtectedView}>
  //       //   <Text style={[styles.button, styles.redButton]}>
  //       //     Protected Content
  //       //   </Text>
  //       // </TouchableHighlight>
  //     </View>
  //     </Container>
  //   )
  // }
}

export default Greeting;
