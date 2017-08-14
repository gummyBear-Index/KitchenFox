import React, { Component } from 'react';
import {
  InputGroup,
  Input,
  Button,
  Icon,
  View,
  ListItem,
} from 'native-base';

import { TouchableHighlight, Picker } from 'react-native';
import { button } from '../../style/button';
import { screen, addItemCard } from '../../style/layout';
import { input, addItemsInput } from '../../style/input';
import { addItemsText } from '../../style/text';
import { PLACEHOLDER_TEXT_ADD_ITEMS } from '../../style/common';

class AddItemCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      upc: '',
      name: '',
      quantity: '',
      units: 'g',
      weight: '',
    };
  }

  toggleCamera(){
    this.props.toggleParentCam(this.props.cardNum);
  }

  onChangeText(type, value) {
    const newState = Object.assign(this.state);
    newState[type] = value;
    this.setState(newState);
    if (this.state.quantity === '1') {
      this.setState({ units: 'each' });
    }
    this.props.updateParent(this.props.cardNum, this.state);
  }

  componentWillReceiveProps(newProps) {
    this.setState(newProps.initialCardState);
  }

  render() {
    return (
      <View style={addItemCard.container}>
        <View>
          {/* ---- COL 1 --- */}
          <InputGroup style={addItemCard.row} borderType="rounded">
              <Icon name="nutrition" style={addItemsInput.icon}/> 
              <View style={addItemCard.name}>
                <Input
                  style={addItemsText.name}
                  placeholder="Name"
                  placeholderTextColor={PLACEHOLDER_TEXT_ADD_ITEMS}
                  autoCorrect={false}
                  autoCapitalize="words"
                  onChangeText={name => this.onChangeText('name', name)}
                  value={this.state.name}
                />
              </View>
              {/* ---- COL 2 --- */}
              <TouchableHighlight
                style={addItemCard.scanner}
                onPress={() => this.toggleCamera()}
              >
                <Icon theme={{ iconFamily: 'FontAwesome' }} name='barcode' 
                      style={addItemsInput.iconScanner} />
              </TouchableHighlight>
              {/* <Icon name="camera"  />  */}
        </InputGroup>
        </View>

        {/* ---- NEW ROW --- */}

        <View>
          <View style={addItemCard.rowQuan}>
            <Icon name="cart" style={addItemsInput.icon} /> 
            <View style={addItemCard.quan}>
              <Input
                style={addItemsText.quan}
                placeholder="Quantity"
                placeholderTextColor={PLACEHOLDER_TEXT_ADD_ITEMS}
                autoCorrect={false}
                keyboardType="numeric"
                onChangeText={quantity => this.onChangeText('quantity', quantity)}
                value={`${this.state.quantity}`}
            />
          </View>
          <View style={addItemCard.quanUnit}>
            <Picker
              itemStyle={{color: 'white', height: 60}}
              placeholder="units"
              mode="dropdown"
              selectedValue={this.state.units}
              onValueChange={units => this.onChangeText('units', units)}
            >
              <Picker.Item label="grams" value="g" />
              <Picker.Item label="each" value="each" />
            </Picker>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default AddItemCard;
