import React, { Component } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { AsyncStorage, StackNavigator } from 'react-native';
import { styles } from '../../style/auth/session';
import { signin } from '../../actions/session_actions';
import { createUser, login, demoSecured, securable, protectedHeaders } from '../../util/session_api_util';

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
    this.initialState = {
      username: '',
      password: ''
    };
    this.state = this.initialState;
    this.handleSignin = this.handleSignin.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser) {
      this.props.navigation.navigate('IndexPage');
    }
  }

  handleSignin() {
    this.props.signin(this.state);
    dismissKeyboard();
  }

  handleGoBack() {
    this.props.navigation.navigate('Greeting');
    // const routeStack = this.props.navigator.getCurrentRoutes();
    // this.props.navigator.jumpTo(routeStack[0]);
  }

  render() {
    return(
      <Container>
        <View style={styles.container}>
          <Header>
            <Button
              onPress={() => this.handleGoBack()}
              transparent
            >
              <Icon name='ios-arrow-back' />
            </Button>
            <Title>Sign In</Title >
          </Header>
          <View
            style={styles.content}
          >
            <InputGroup style={styles.input}>
              <Icon style={styles.inputIcon} name='ios-person' />
              <Input
                placeholder='Email'
                keyboardtype='email-address'
                autoCorrect={false}
                autoCapitalize='none'
                onChangeText={username => this.setState({ username })}
                value={this.state.username}
              />
            </InputGroup>
            <InputGroup style={styles.input}>
              <Icon style={styles.inputIcon} name='ios-unlock' />
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
                style={styles.button}
                onPress={(e) => this.handleSignin()}
              >
                <Text>Sign in</Text>
              </Button>
            )}
          </View>
        </View>
      </Container>

    );
  }
}

export default SignIn;
