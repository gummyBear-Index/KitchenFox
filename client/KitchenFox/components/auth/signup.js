import React, { Component } from 'react';

import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import { AsyncStorage, Image, KeyboardAvoidingView, TouchableHighlight } from 'react-native';
import { text } from '../../style/text.js';
import { button } from '../../style/button';
import { input } from '../../style/input';
import { session } from '../../style/layout';
import { PLACEHOLDER_TEXT } from '../../style/common';
import FButton from '../misc/flat_button';

import {
  Container,
  Header,
  Title,
  InputGroup,
  Input,
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

  render() {
		return (
			<Container>
				<Image
        source={require('../../images/greeting/food-5-.jpg')}
        style={session.container}>
				<View style={session.sessionDarkness}>
				<View style={session.container}>
					<View
						style={session.content}>
						{/* <KeyboardAvoidingView> */}
							<Text style={text.titleLeft}>Sign Up</Text>
							<InputGroup style={input.field}>
								<Icon name='ios-arrow-forward' style={input.icon} />
								<Input
									style={input.sessionText}
									placeholderTextColor={PLACEHOLDER_TEXT}
									placeholder='First name'
									autoCorrect={false}
									onChangeText={first_name => this.setState({ first_name })}
									value={this.state.first_name}
								/>
							</InputGroup>
							<InputGroup style={input.field}>
								<Icon name='ios-arrow-forward' style={input.icon} />
								<Input
									style={input.sessionText}
									placeholderTextColor={PLACEHOLDER_TEXT}
									placeholder='Last name'
									autoCorrect={false}
									onChangeText={last_name => this.setState({ last_name })}
									value={this.state.last_name}
								/>
							</InputGroup>
							<InputGroup style={input.field}>
								<Icon name="ios-person" style={input.icon} />
								<Input
									style={input.sessionText}
									placeholderTextColor={PLACEHOLDER_TEXT}
									placeholder="Email"
									keyboardType="email-address"
									autoCorrect={false}
									autoCapitalize="none"
									onChangeText={username => this.setState({ username })}
									value={this.state.username}
								/>
							</InputGroup>
							<InputGroup style={input.field}>
								<Icon name="ios-unlock" style={input.icon} />
								<Input
									style={input.sessionText}
									placeholderTextColor={PLACEHOLDER_TEXT}
									placeholder="Password"
									onChangeText={password => this.setState({ password })}
									value={this.state.password}
									secureTextEntry
								/>
							</InputGroup>
							{this.state.isLoading ? (
								<Spinner size="small" color="#000000" />
							) : (
								<TouchableHighlight
									underlayColor='#fff'
									style={button.sessionButton}
									onPress={(e) => this.handleSignup()}
								>
									<Text style={text.sessionButton}>Go</Text>
								</TouchableHighlight>
							)}
					{/* </KeyboardAvoidingView> */}
					</View>
				</View>
				</View>
				</Image>
			</Container>
		);
	}
}

export default Signup;
