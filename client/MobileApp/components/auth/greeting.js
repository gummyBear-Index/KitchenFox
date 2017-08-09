import React, { Component } from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
import {
  TouchableHighlight,
  Text,
  View,
} from 'native-base';

import SigninPage from './signin';
import SignupPage from './signup';
// const ProtectedView = require('./ProtectedView')

class Greeting extends Component {

  _handleSignupPage = () => {
    // this.props.navigator.push({
    //   title: 'Signup',
    //   component: SignupPage,
    //   backButtonTitle: 'Back'
    // })
  }
  _handleSigninPage = () => {
    // this.props.navigator.push({
    //   title: 'Signin',
    //   component: SigninPage,
    //   backButtonTitle: 'Back'
    // })
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
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._handleSignupPage}>
          <Text style={[styles.button, styles.blueButton]}>
            Sign up
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._handleSigninPage}>
          <Text style={[styles.button, styles.greenButton]}>
            Sign In
          </Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._handleLogOut}>
          <Text style={[styles.button, styles.greyButton]}>
            Log Out
          </Text>
        </TouchableHighlight>
        // <TouchableHighlight onPress={this._handleProtectedView}>
        //   <Text style={[styles.button, styles.redButton]}>
        //     Protected Content
        //   </Text>
        // </TouchableHighlight>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 80,
    flex: 1,
    flexDirection: 'column'
  },
  button: {
    borderRadius: 4,
    padding: 20,
    textAlign: 'center',
    marginBottom: 20,
    color: '#fff'
  },
  greenButton: {
    backgroundColor: '#4CD964'
  },
  blueButton: {
    backgroundColor: '#34AADC'
  },
  redButton: {
    backgroundColor: '#FF3B30',
    color: '#fff'
  },
  greyButton: {
    backgroundColor: '#777',
    color: '#fff'
  }
})

export default Greeting;
