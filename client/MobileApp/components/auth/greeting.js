import React, { Component } from 'react';
import { AsyncStorage, StyleSheet } from 'react-native';
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

// const ProtectedView = require('./ProtectedView')


class Greeting extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  constructor(props) {
		super(props);

    this.initialState = {
      email: '',
      password: ''
    }
    this.state = this.initialState;
  }

  _handleSignupPage = () => {
    this.props.navigator.push({
      title: 'SignUp',
      component: SignUp,
      backButtonTitle: 'Back'
    })
  }
  _handleSigninPage = () => {
    this.props.navigator.push({
      title: 'SignIn',
      component: SignIn,
      backButtonTitle: 'Back'
    })
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
    // const {navigate} = this.props.navigation;
    return(
      <Container>
        <View style={styles.container}>
          <Header>
            <Title>Welcome to KitchenFox!</Title >
          </Header>
          <Button>
            <Text>Sign Up</Text>
          </Button>
          <Button>
            <Text>Sign In</Text>
          </Button>
        </View>
      </Container>
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
