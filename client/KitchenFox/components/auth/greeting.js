import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AsyncStorage, StyleSheet } from 'react-native';
import { Animated, Image, Text } from 'react-native';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { signin } from '../../actions/session_actions';
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
  Navigator,
} from 'native-base';

import SignIn from './signin';
import SignUp from './signup';
import { text } from '../../style/text';
import { button } from '../../style/button';
import { session } from '../../style/layout';

class Greeting extends Component {
  constructor(props) {
		super(props);

    this.state = {
      username: '',
      password: '',
      fadeAnim: new Animated.Value(0),
    };
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleDemo() {
    const { navigate } = this.props.navigation;
    this.props.signin({
      username: 'hiro',
      password: 'hiro'
    });
    dismissKeyboard();
    navigate('PantryIndex');
  }

  render() {
    const { navigate } = this.props.navigation;
    return(
      <Image
        source={require('../../images/greeting/food-4-.jpg')}
        style={session.container}>
         <View style={session.darkness}>
          <View style={session.header}>
            <Text style={text.sessionTitle}>KitchenFox</Text>
            <Text style={text.sessionMessage}>always know what you have</Text>
            <Text style={text.sessionMessage}>and what you can cook</Text>
          </View>
          <View style={session.groupButtons}>
            <Button
              style={button.sessionButton}
              onPress={() => navigate('Signup', {name: 'signup'})}>
              <Text style={text.sessionButton}>Sign Up</Text>
            </Button>
            <Button
              style={button.sessionButton}
              onPress={() => navigate('Signin', {name: 'signin'})}>
              <Text style={text.sessionButton}>Sign In</Text>
            </Button>
            <Button
              style={button.sessionButton}
              onPress={() => this.handleDemo()}>
              <Text style={text.sessionButton}>Demo</Text>
            </Button>
          </View>
         </View>
      </Image>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  session,
});
const mapDispatchToProps = dispatch => ({
  signin: user => dispatch(signin(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(Greeting);
