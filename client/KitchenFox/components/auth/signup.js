import React, { Component } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { AsyncStorage } from 'react-native';

import { text } from '../../style/text.js';
import { button } from '../../style/button';
import { input } from '../../style/input';
import { session } from '../../style/layout';

import { createUser, login, saveToken, getLocalToken, demoSecured, securable, protectedHeaders } from '../../util/session_api_util';

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


class Signup extends Component {	
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      last_name: '',
      username: '',
      password: '',
      token: '',
    };
    this.handleSignup = this.handleSignup.bind(this);
  }

  componentWillReceiveProps(newProps) {
    if (newProps.session.token.length) {
      let user = newProps.currentUser;
      // navigate to index page
      // this.props.navigation.navigate('indexPage');
    }
  }

  handleSignup() {
    this.props.signup(this.state);
    // console.warn(JSON.stringify(this.state))
		dismissKeyboard();
	}

  handleLogout() {
    this.props.logout();
  }

  render() {

		return (
			<Container>
				<View style={session.container}>
					<View
						style={session.content}>
						<Text style={text.titleLeft}>Sign Up</Text>
						<InputGroup style={input.field}>
							<Icon name='ios-arrow-forward' />
							<Input
								placeholder='First name'
								autoCorrect={false}
								onChangeText={first_name => this.setState({ first_name })}
								value={this.state.first_name}
							/>
						</InputGroup>
						<InputGroup style={input.field}>
							<Icon name='ios-arrow-forward' />
							<Input
								placeholder='Last name'
								autoCorrect={false}
								onChangeText={last_name => this.setState({ last_name })}
								value={this.state.last_name}
							/>
						</InputGroup>
						<InputGroup style={input.field}>
							<Icon name="ios-person" />
							<Input
								placeholder="Email"
								keyboardType="email-address"
								autoCorrect={false}
								autoCapitalize="none"
								onChangeText={email => this.setState({ username })}
								value={this.state.username}
							/>
						</InputGroup>
						<InputGroup style={input.field}>
							<Icon name="ios-unlock" />
							<Input
								placeholder="Password"
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
								onPress={(e) => this.handleSignup()}
							>
								<Text>Sign up</Text>
							</Button>
						)}
					</View>
				</View>
			</Container>
		);
	}
}

export default Signup;
