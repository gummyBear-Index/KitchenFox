import React, { Component } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { StackNavigator } from 'react-native';
import { text } from '../../style/text.js';
import { button } from '../../style/button';
import { input } from '../../style/input';
import { session } from '../../style/layout';

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

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleSignin = this.handleSignin.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser) {
      let user = newProps.currentUser;
      // navigate to index page
      // this.props.navigation.navigate('IndexPage');
    }
  }

  handleSignin() {
    console.warn(JSON.stringify(this.state));
    this.props.signin(this.state);
    // this.props.navigation.navigate('Pantry');
    dismissKeyboard();
  }

  render() {
    // const { navigate } = this.props.navigation;
    return(
      <Container>
        <View style={session.container}>
          <View
            style={session.content}>
              <Text style={text.titleLeft}>Sign In</Text>
            <InputGroup style={input.field}>
              <Icon name='ios-person' />
              <Input
                placeholder='Email'
                keyboardtype='email-address'
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
              />
            </InputGroup>
            <InputGroup style={input.field}>
              <Icon name='ios-unlock' />
              <Input
                placeholder='Password'
                onChangeText={password => this.setState({ password })}
                value={this.state.password}
                secureTextEntry
              />
            </InputGroup>
            {this.state.isLoading ? (
              <Spinner size="small" color="#000000" />
            ) : (
              <Button
                style={button.sessionButton}
                onPress={() => this.handleSignin()}
              >
                <Text style={text.sessionButton}>Go</Text>
              </Button>
            )}
          </View>
        </View>
      </Container>
    );
  }
}

export default SignIn;
