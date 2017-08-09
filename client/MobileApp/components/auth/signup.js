import React, { Component, PropTypes } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
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
  Text
} from 'native-base';

import { createUser, login, saveToken, getLocalToken, demoSecured, securable, protectedHeaders } from '../../util/session_api_util';
// import { Text } from 'react-native';

class Signup extends Component {
  constructor(props) {
		super(props);

		this.initialState = {
			firstName: '',
			email: '',
			username: '',
			password: '',
		};
		this.state = this.initialState;
  }

  onPressRegister() {
		const { username, password } = this.state;

		const gimmeToken = (response) => {
			// const blarg = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ODgwODk3MmFhOWM3MmYxNmZmODY0ZSIsInVzZXJuYW1lIjoiZ3JhaGFtIiwiaWF0IjoxNTAyMDg3NTY3fQ.Azmp7HCklfPf9vz5TJhYHdEJzeqtM7CNZ3aQf5w1F5I";
			// console.warn(response._bodyText, blarg);
			let thing = JSON.parse(response._bodyText);
			// console.warn(`answer: ${thing.token}`);
			// console.warn(thing);
			// console.warn(getDifference(thing, blarg));
      AsyncStorage.setItem('jwt', thing.token);
      // alert(`Success! You may now access protected content.`)
      // Redirect to home screen
			return thing.token;
		};

		dismissKeyboard();

		login(username, password).then(response => saveToken(response));
		let that = this;
		setTimeout(that.thing, 5000);
	}

	thing() {
		this.token;
		let that = this;
		AsyncStorage.getItem('jwt').then(token => console.warn(token));
	}

  onPressBack() {
		const routeStack = this.props.navigator.getCurrentRoutes();
		this.props.navigator.jumpTo(routeStack[0]);
  }

  render() {
		return (
			<Container>
				<View style={styles.container}>
					<Header>
						<Button
							onPress={() => this.onPressBack()}
							transparent
						>
							<Icon name="ios-arrow-back" />
						</Button>
						<Title>Register</Title>
					</Header>
					{/* <TouchableWithoutFeedback
						onPress={dismissKeyboard}
					> */}
						<View
							style={styles.content}
						>
							{/* {this.state.error ? (
								<FormMessage message={this.state.error} />
							) : null} */}
							<InputGroup style={styles.input}>
								<Icon style={styles.inputIcon} name="ios-arrow-forward" />
								<Input
									placeholder="First name"
									autoCorrect={false}
									onChangeText={firstName => this.setState({ firstName })}
									value={this.state.firstName}
								/>
							</InputGroup>
							<InputGroup style={styles.input}>
								<Icon style={styles.inputIcon} name="ios-person" />
								<Input
									placeholder="Email"
									keyboardType="email-address"
									autoCorrect={false}
									autoCapitalize="none"
									onChangeText={email => this.setState({ email })}
									value={this.state.email}
								/>
							</InputGroup>
							<InputGroup style={styles.input}>
								<Icon style={styles.inputIcon} name="ios-person" />
								<Input
									placeholder="Username"
									keyboardType="email-address"
									autoCorrect={false}
									autoCapitalize="none"
									onChangeText={username => this.setState({ username })}
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
									onPress={() => this.onPressRegister()}
								>
									<Text>Register</Text>
								</Button>
							)}
						</View>
					{/* </TouchableWithoutFeedback> */}
				</View>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    flexDirection: 'column'
  },
  button: {
    borderRadius: 4,
    padding: 20,
    // textAlign: 'center',
    marginBottom: 20,
    // color: '#fff'
  },
  greenButton: {
    backgroundColor: '#4CD964'
  },
  centering: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Signup;
