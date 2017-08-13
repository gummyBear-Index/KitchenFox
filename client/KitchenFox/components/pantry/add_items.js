import React, { Component } from 'react';
import { StyleSheet, Alert, Button, ScrollView, TouchableHighlight } from 'react-native';
import { StackNavigator } from 'react-navigation';

import Camera from 'react-native-camera';
import md5 from 'md5';
import { camera } from '../../style/cameraStyle';
import { upcLookUp } from '../../util/api_util';
import AddItemCard from './add_item_card';

import { Container, Content, Text, View, List } from 'native-base';


import { text } from '../../style/text';
import { screen } from '../../style/layout';
import { button } from '../../style/button';


class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.initialCardState = {
      upc: '',
      name: '',
      quantity: '',
      units: 'g',
      weight: '',
    }
    this.state = {
      showCamera: false,
      cameraType: Camera.constants.Type.back,
      cart: [],
      numItemCards: 1,
      items: {
        0: Object.assign(this.initialCardState),
      },
      camIdx: 0,
    }
    this.onBarCodeRead = this.onBarCodeRead.bind(this);
    this.toggleCamera = this.toggleCamera.bind(this);
    this.handleCardUpdate = this.handleCardUpdate.bind(this);
    this.itemFormGen();
  }

  onBarCodeRead(e) {
    const newItems = Object.assign(this.state.items);
    let newItem;
    this.setState({ showCamera: false });
    upcLookUp(e.data, this.props.session.token).then((res) => {
      newItem = JSON.parse(res._bodyText);
      newItem = newItem[0];
      if (newItem.quantity === 1) {
        newItem.units = 'each';
      }
      this.handleCardUpdate(this.state.camIdx, newItem)
    });
    Alert.alert(
        "Barcode Found!",
        "Type: " + e.type + "\nData: " + e.data
    );
  }

  handleCardUpdate(idx, childState) {
    const keyArr = ['upc', 'name', 'quantity', 'units', 'weight']
    const newItems = Object.assign(this.state.items);
    newItems[idx] = Object.assign(childState);
    this.setState({ items: newItems });
    let numBlank = 0;
    for (let i = 0; i < this.state.numItemCards; i++) {
      let item = this.state.items[i];
      if (!(item.upc.length || item.name.length || `${item.quantity}`.length)) {
        numBlank += 1;
      }
    }
    if (numBlank === 0) {
      this.updateNumItemCards()
    }
  }

  toggleCamera(cardNum){
    this.setState({
      showCamera: true,
      camIdx: cardNum,
    });
  }

  handleSubmit() {
    let inventory = Object.assign(this.props.inventory);
    let itemKeys = Object.keys(this.state.items);
    const cart = [];
    itemKeys.forEach(i => {
      if (this.state.items[i].name.length)
      cart.push(this.state.items[i])
    })
    cart.forEach((item) => {
      let upc = item.upc.length ? item.upc : md5(item.name)
      if (upc in inventory) {
        let newQuant = inventory[upc].quantity;
        newQuant = parseInt(newQuant);
        newQuant += parseInt(item.quantity);
        inventory[upc].quantity = newQuant;
      } else {
        inventory[upc] = {
          name: item.name,
          quantity: item.quantity,
          units: item.units,
        }
        inventory[upc].weight = item.weight.length ? item.weight : 'NA';
      }
    });
    let finalInventory = {
      inventory,
    };
    this.props.sendItems(this.props.session.token, finalInventory);
    this.props.requestItems(this.props.session.token);
    const { navigate } = this.props.navigation;
    navigate('PantryIndex');
  };

  updateNumItemCards() {
    let newItems = this.state.items;
    newItems[this.state.numItemCards] = Object.assign(this.initialCardState);
    const newNumItemCards = this.state.numItemCards + 1;
    this.setState({
      numItemCards: newNumItemCards,
      items: newItems,
    })
  }

  itemFormGen() {
    const itemCards = [];
    for (let i = 0; i < this.state.numItemCards; i++) {
      let item = this.state.items.hasOwnProperty(i) ? this.state.items[i] : this.initialCardState;
      item = Object.assign(item);
      let j = (
        <AddItemCard
          key={`card-form-number-${i}`}
          cardNum={i}
          updateParent={(cardNum, localState) => this.handleCardUpdate(cardNum, localState)}
          token={this.props.session.token}
          toggleParentCam={cardNum => this.toggleCamera(cardNum)}
          initialCardState={Object.assign(item)} />
      );
      itemCards.push(j);
    }
    return itemCards;
  }

  // static navigationOptions = {
  //   title: 'Add items your pantry',
  // };

  render() {
    if (this.state.showCamera) {
      return (
        <View style={camera.container}>
        <Text>
          Scan the barcode now!
        </Text>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={camera.preview}
          aspect={Camera.constants.Aspect.fill}
          orientation={Camera.constants.Orientation.portrait}
          barCodeTypes={['org.gs1.UPC-E']}
          onBarCodeRead={this.onBarCodeRead}>
          <View style={camera.square}>
            <Text>Here</Text>
          </View>
        </Camera>
        </View>
      );
    } return (
      <View style={screen.container}>
      <ScrollView>
        <Text style={text.titleCenter}>Add items</Text>
        {/* <List> */}
          {this.itemFormGen()}
        {/* </List> */}
        <TouchableHighlight
          style={button.posFormButton}
          onPress={() => this.handleSubmit()}>
          <Text style={text.posButton}>submit</Text>
        </TouchableHighlight>
      </ScrollView>
      </View>
      );
  }
}

export default AddItems;
