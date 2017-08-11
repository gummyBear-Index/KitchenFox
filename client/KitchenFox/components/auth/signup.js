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
  }

  componentWillReceiveProps(newProps) {
    if (newProps.currentUser) {
      let user = newProps.currentUser;
      console.warn(JSON.stringify(user));
      // navigate to index page
      // this.props.navigation.navigate('indexPage');
    }
  }

  handleSignup() {
		// const { firstName, lastName, username, password } = this.state;
    //
		// const getToken = (response) => {
  	// 	let parsedRes = JSON.parse(response._bodyText);
    //   AsyncStorage.setItem('jwt', parsedRes.token);
    //   // alert(`Success! You may now access protected content.`)
    //   // Redirect to home screen
		// 	return parsedRes.token;
		// };
		// this.props.logout();
		this.props.signup(this.state);
		this.props.navigation.navigate('Pantry');
    dismissKeyboard();
  }

  handleLogout() {
    this.props.logout();
  }

  handleGoBack() {
    // navigate to greeting page

		// const routeStack = this.props.navigator.getCurrentRoutes();
		// this.props.navigator.jumpTo(routeStack[0]);
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
