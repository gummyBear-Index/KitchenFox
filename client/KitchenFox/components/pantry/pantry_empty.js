import React, { Component } from 'react';

import { Container, ListItem, Button, Text } from 'native-base';
import { View, TouchableHighlight, ScrollView } from 'react-native';
import { text } from '../../style/text';
import { button } from '../../style/button';


class EmptyPantry extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <Container>
        <View style={{backgroundColor: '#eee', paddingBottom: 30, paddingTop: 10}}>
          <Text style={text.titleDiminished}>There is nothing in your pantry or fridge</Text>
          <TouchableHighlight 
            onPress={() => { navigate('AddItem'); }}
            style={button.posFormButton}>
            <Text style={text.posButton}>add items</Text>
          </TouchableHighlight>
        </View>
      </Container>
    );
  }
}

export default EmptyPantry;