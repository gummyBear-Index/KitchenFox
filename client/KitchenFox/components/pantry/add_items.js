import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, View } from 'native-base';
import crypto from 'crypto';

import AddItemCard from './add_item_card';

class PantryAddItems extends React.Component {
  constructor() {
    super(props);
    this.state = {

    }

  }

  genSku(name) {
    const sku = crypto.createHash('md5').update(name).digest("hex");
    return sku;
  }


  static navigationOptions = {
    title: 'Add items your pantry',
  };



  render() {
    return (
      <View>
        <Text>ADD ITEMS HERE</Text>
      </View>
    );
  }
}

export default PantryAddItems;
