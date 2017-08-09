import React, { Component } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { AsyncStorage } from 'react-native';
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

import { createUser, login, saveToken, getLocalToken, demoSecured, securable, protectedHeaders } from '../../util/session_api_util';

class Signup extends Component {
  constructor(props) {
		super(props);

		this.initialState = {
			firstName: '',
			lastName: '',
			username: '',
			password: '',
		};
		this.state = this.initialState;
  }

  handleSignup() {
		const { firstName. lastName, username, password } = this.state;

		const getToken = (response) => {
  		let parsedRes = JSON.parse(response._bodyText);
      AsyncStorage.setItem('jwt', parsedRes.token);
      // alert(`Success! You may now access protected content.`)
      // Redirect to home screen
			return parsedRes.token;
		};

		dismissKeyboard();

		createUser(username, password).then(response => saveToken(response));
		// let that = this;
		// setTimeout(that.showJWT, 5000);
	}

	showJWT() {
		this.token;
		let that = this;
		AsyncStorage.getItem('jwt').then(token => console.warn(token));
	}

  handleGoBack() {
		const routeStack = this.props.navigator.getCurrentRoutes();
		this.props.navigator.jumpTo(routeStack[0]);
  }

  render() {
		return (
			<Container>
				<View style={styles.container}>
					<Header>
						<Button
							onPress={() => this.handleGoBack()}
							transparent
						>
							<Icon name='ios-arrow-back' />
						</Button>
						<Title>Sign Up</Title>
					</Header>
						<View
							style={styles.content}
						>
							<InputGroup style={styles.input}>
								<Icon style={styles.inputIcon} name='ios-arrow-forward' />
								<Input
									placeholder='First name'
									autoCorrect={false}
									onChangeText={firstName => this.setState({ firstName })}
									value={this.state.firstName}
								/>
							</InputGroup>
							<InputGroup style={styles.input}>
								<Icon style={styles.inputIcon} name='ios-arrow-forward' />
								<Input
									placeholder='Last name'
									autoCorrect={false}
									onChangeText={lastName => this.setState({ lastName })}
									value={this.state.lastName}
								/>
							</InputGroup>
							<InputGroup style={styles.input}>
								<Icon style={styles.inputIcon} name="ios-person" />
								<Input
									placeholder="Email"
									keyboardType="email-address"
									autoCorrect={false}
									autoCapitalize="none"
									onChangeText={email => this.setState({ username })}
									value={this.state.username}
								/>
							</InputGroup>
							<InputGroup style={styles.input}>
								<Icon style={styles.inputIcon} name="ios-unlock" />
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
									style={styles.button}
									onPress={() => this.handleSignup()}
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
