import React, { Component } from 'react';
// import { StackNavigator } from 'react-navigation';
import { Container, Content, Text } from 'native-base';

class PantryAddItems extends React.Component {
  static navigationOptions = {
    title: 'Add an item your pantry',
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>
            PLUS SIGN
          </Text>
        </Content>
      </Container>
    );
  }
}

export default PantryAddItems;
