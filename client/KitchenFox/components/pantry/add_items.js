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
            ADD AN ITEM HERE
          </Text>
        </Content>
      </Container>
    );
  }
}

export default PantryAddItems;
