import React, { Component } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { StackNavigator } from 'react-native';
import { styles } from '../../style/auth/session';

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
      password: '',
      first_name: '',
      last_name: '',
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
    this.props.signin(this.state);
    dismissKeyboard();
  }

  handleLogout() {
    this.props.logout();
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
                <Text>SIGN IN</Text>
              </Button>
            )}
          </View>
          <Button
            style={styles.button}
            onPress={(e) => this.handleLogout()}
          >
            <Text>LOGOUT</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

export default SignIn;
