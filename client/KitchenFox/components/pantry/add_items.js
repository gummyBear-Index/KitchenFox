import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

import { Container, Content, Text, View } from 'native-base';

class PantryAddItems extends React.Component {
  static navigationOptions = {
    title: 'Add an item your pantry',
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
