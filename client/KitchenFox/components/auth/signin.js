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
    // console.warn(newProps);
    // console.warn(JSON.stringify(newProps));
    if (newProps.currentUser) {
      this.props.navigation.navigate('IndexPage');
    }
  }

  handleSignin() {
    this.props.signin(this.state);
    // console.warn(JSON.stringify(this.state));
    // console.warn(JSON.stringify(this.props));

    dismissKeyboard();

    // console.warn(newProps);
    // console.warn(JSON.stringify(newProps));
  }

  // handleSignin() {
    // signin(this.state);
    // const { username, password } = this.state;
    // const getToken = response => {
    //   let parsedRes = JSON.parse(response._bodyText);
    //   AsyncStorage.setItem('jwt', parsedRes.token);
    //   return parsedRes.token;
    // }
    //
    // login(username, password).then(response => saveToken(response))
    // let that = this;
    // setTimeout(that.showJWT, 5000);

  showJWT() {
    this.token;
    let that = this;
    AsyncStorage.getItem('jwt').then(token => console.warn(token));
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
                onPress={() => this.handleSignin()}
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
