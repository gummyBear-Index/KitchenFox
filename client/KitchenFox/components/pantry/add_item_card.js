import React, { Component } from 'react';
import { StackNavigator, Alert, StyleSheet } from 'react-native';
import Camera from "react-native-camera";
import {
  Container,
  Content,
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

class AddItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCamera: true,
      cameraType: Camera.constants.Type.back,
      upc: "none",
    };
    this._onBarCodeRead = this._onBarCodeRead.bind(this);
  }

  _onBarCodeRead(e) {
    this.setState({showCamera: false, upc: e.data});
    console.warn(this.state.upc);
    Alert.alert(
        "Barcode Found!",
        "Type: " + e.type + "\nData: " + e.data
    );
  }

  render() {
  return (
    <Container>
      <View style={session.container}>
        <View
          style={session.content}>
            <Text style={text.titleLeft}>Sign In</Text>
          <InputGroup style={input.field}>
            <Icon name='label' />
            <Input
              placeholder='Name'
              autoCorrect={false}
              autoCapitalize='words'
              onChangeText={name => this.setState({ username })}
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
              <Text>SIGN IN</Text>
            </Button>
          )}
        </View>
      </View>
    </Container>
  );
  }
}

export default AddItemCard;



// <div className="perk-card">
//   <div className="perk-price">${props.price}</div>
//   <div className="perk-title">{props.title}</div>
//   <div className="perk-description">{props.description}</div>
//   <div onClick={() => props.updateParent(amount)} className="perk-get">get this perk</div>
// </div>
