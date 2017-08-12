import React, { Component } from 'react';
import { StackNavigator, Alert, StyleSheet } from 'react-native';
import Camera from "react-native-camera";
import {button} from '../../style/button';
import {text} from '../../style/text';
import {input} from '../../style/input';

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
      showCamera: false,
      cameraType: Camera.constants.Type.back,
      upc: "none",
      name: "",
      quantity: "",
      units: "",
      weight: "",
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
            <Text style={text.titleCenter}>Sign In</Text>
          <InputGroup style={input.field}>
            <Icon name='label' />
            <Input
              placeholder='Name'
              autoCorrect={false}
              autoCapitalize='words'
              onChangeText={name => this.setState({name: name})}
              value={this.state.name}
            />
          </InputGroup>
          <InputGroup style={input.field}>
            <Icon name='label' />
            <Input
              placeholder='Quantity'
              autoCorrect={false}
              keyboardType="numeric"
              onChangeText={quantity => this.setState({quantity: quantity})}
              value={this.state.quantity}
            />
          </InputGroup>
          <InputGroup style={input.field}>
            <Icon name='label' />
            <Input
              placeholder='Name'
              autoCorrect={false}
              autoCapitalize='words'
              onChangeText={name => this.setState({name: name})}
              value={this.state.name}
            />
          </InputGroup>
          <Picker
            selectedValue={this.state.unit}
            onValueChange={unit => this.setState({unit: unit})}>
            <Picker.Item label="grams" value="g" />
            <Picker.Item label="each" value="each" />
          </Picker>
            <Button
              style={button.sessionButton}
              onPress={() => this.handleSignin()}
            >
              <Icon name='barcode' />
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
