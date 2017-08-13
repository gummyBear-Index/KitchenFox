import React, { Component } from 'react';
import { StackNavigator, Alert, StyleSheet } from 'react-native';
import Camera from "react-native-camera";
import {button} from '../../style/button';
import {text} from '../../style/text';
import {input} from '../../style/input';
import {session} from '../../style/layout';
import { camera } from '../../style/cameraStyle';
import { upcLookUp } from '../../util/api_util';

import {
  Container,
  Picker,
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
  ListItem,
} from 'native-base';

class AddItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = Object.assign(this.props.initialCardState);
    this.onChange = this.onChange.bind(this);

  }

  onBarCodeRead(e) {
    this.setState({showCamera: false, upc: e.data});
    upcLookUp(e.data, this.props.token).then((res) => {
      this.setState(JSON.parse(res._bodyText)[0]);
      if (JSON.parse(res._bodyText)[0].quantity === 1) {
        this.setState({units: "each"});
      }
    });
    Alert.alert(
        "Barcode Found!",
        "Type: " + e.type + "\nData: " + e.data
    );
    this.props.updateParent(this.props.cardNum, this.state);
  }

  toggleCamera(){
    this.props.toggleParentCam(this.props.cardNum);
  }

  onChange(string) {
    let newText = '';
    let numbers = '0123456789';

    for (let i = 0; i < string.length; i++) {
        if ( numbers.indexOf(string[i]) > -1 ) {
            newText = newText + string[i];
        }
    }
    this.setState({quantity: newText});
    this.props.updateParent(this.props.cardNum, this.state);
  }

  onChangeText(type, value) {
    this.setState({[type]: value});
    if (this.state.quantity === "1") {
      this.setState({units: "each"});
    }
    this.props.updateParent(this.props.cardNum, this.state);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.initialCardState);
  }

  // onChangeText={name => this.setState({name: name})}

  render() {
    return (
      <ListItem>
        <View style={session.container}>
          <View
            style={session.content}>
            <InputGroup style={input.field} borderType="rounded">
              <Icon name='nutrition' />
              <Input
                placeholder='Name'
                autoCorrect={false}
                autoCapitalize='words'
                onChangeText={name => this.onChangeText('name', name)}
                value={this.state.name}
              />
            </InputGroup>
            <InputGroup style={input.field} borderType="rounded">
              <Icon name='calculator' />
              <Input
                placeholder='Quantity'
                autoCorrect={false}
                keyboardType="numeric"
                onChangeText={(string) => this.onChange(string)}
                value={`${this.state.quantity}`}
              />
            </InputGroup>
            <Icon name='cart' />
            <Picker
              selectedValue={this.state.units}
              onValueChange={units => this.onChangeText('units', units)}>
              <Picker.Item label="grams" value="g" />
              <Picker.Item label="each" value="each" />
            </Picker>
              <Button
                style={button.sessionButton}
                onPress={() => this.toggleCamera()}
              >
                <Icon name='camera' />
              </Button>
          </View>
        </View>
      </ListItem>
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
