import React, { Component, PropTypes } from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
	AsyncStorage,
	TouchableWithoutFeedback,
	StyleSheet,
} from 'react-native';
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
} from 'native-base';

import * as usersApi from 'MobileApp/src/data/users/api';
import * as session from 'MobileApp/src/services/session';
import * as api from 'MobileApp/src/services/api';
import FormMessage from 'MobileApp/src/components/FormMessage';
// import { createUser } from '../../../services/util/api_util';

const styles = StyleSheet.create({
	container: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
	},
	content: {
		padding: 30,
		flex: 1,
	},
	shadow: {
		flex: 1,
		width: null,
		height: null,
	},
	input: {
		marginBottom: 20,
	},
	inputIcon: {
		width: 30,
	},
	button: {
		marginTop: 20,
		alignSelf: 'center',
		width: 150,
	},
});

class Register extends Component {
	static propTypes = {
		navigator: PropTypes.shape({
			getCurrentRoutes: PropTypes.func,
			jumpTo: PropTypes.func,
		}),
	}

	constructor(props) {
		super(props);

		this.initialState = {
			isLoading: false,
			error: null,
			firstName: '',
			email: '',
			password: '',
			username: '',
		};
		this.state = this.initialState;
	}


	onPressRegister() {
		const { firstName, email, password, username } = this.state;

		// const createUser = (username, password) => (
		// 	fetch("http://kitchenfox.herokuapp.com:3000/api/register", {
		// 		method: "POST",
		// 		headers: {
		// 			'Content-Type': 'application/x-www-form-urlencoded',
		// 		},
		// 		body: `username=${username}&password=${password}`,
		// 	})
		// );
		const login = (username, password) => (
      // 2602:304:791d:3900:b053:4884:e9c4:7318
			fetch("http://kitchenfox.herokuapp.com/api/login", {
				method: "POST",
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded',
					charset: 'UTF-8',
				},
				// body: `username=${username}&password=${password}`,
        body: JSON.stringify({
          username: username,
          password: password,
        })
			})
		);
		const securable = (stoken) => (
			fetch("http://kitchenfox.herokuapp.com/api/protected", {
				method: "GET",
				headers: {
					authorization: `JWT ${stoken}`,
					'Content-Type': 'application/x-www-form-urlencoded',
					charset: 'UTF-8',
				},
			})
		);

		// .then(response => console.warn(String(response)))

		this.setState({
			isLoading: true,
			error: '',
		});
		dismissKeyboard();

		// let formData = new FormData();
		let params = {
			username,
			password,
		};
		// function getDifference(a, b)
		// {
		//     var i = 0;
		//     var j = 0;
		//     var result = "";

		//     while (j < b.length)
		//     {
		//         if (a[i] != b[j] || i == a.length)
		//             result += b[j];
		//         else
		//             i++;
		//         j++;
		//     }
		//     return result;
		// }
		// for (let key in params) {
		// 	formData.append(key, params[key]);
		// }
		const gimmeToken = (response) => {
			const blarg = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5ODgwODk3MmFhOWM3MmYxNmZmODY0ZSIsInVzZXJuYW1lIjoiZ3JhaGFtIiwiaWF0IjoxNTAyMDg3NTY3fQ.Azmp7HCklfPf9vz5TJhYHdEJzeqtM7CNZ3aQf5w1F5I";
			// console.warn(response._bodyText, blarg);
			let thing = JSON.parse(response._bodyText)
			// console.warn(`answer: ${thing.token}`);
			// console.warn(thing);
			// console.warn(getDifference(thing, blarg));
      AsyncStorage.setItem('jwt', thing.token);
      // alert(`Success! You may now access protected content.`)
      // Redirect to home screen
			return thing.token;
		};

		const gimmeSecret = (response) => {
			const otherThing = JSON.stringify(response);
			console.warn(otherThing);
			AsyncStorage.getItem('jwt', (err, token) => console.warn(token));
			return otherThing;
		}
    // createUser(username, password).then(response => securable(gimmeToken(response))).then(otherthing => gimmeSecret(otherthing));
		login(username, password).then(response => securable(gimmeToken(response))).then(otherthing => gimmeSecret(otherthing));
		// .then(reply => console.warn(JSON.stringify(reply)))
		// let that = this;
		// setTimeout(that.securable(that.radThing), 5000);
		// login(username, password).then(response => secured(response))
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
					<TouchableWithoutFeedback
						onPress={dismissKeyboard}
					>
						<View
							style={styles.content}
						>
							{this.state.error ? (
								<FormMessage message={this.state.error} />
							) : null}
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
									Register
								</Button>
							)}
						</View>
					</TouchableWithoutFeedback>
				</View>
			</Container>
		);
	}
}

export default Register;
