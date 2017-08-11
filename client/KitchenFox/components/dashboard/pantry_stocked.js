import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Content, List, ListItem, Text } from 'native-base';

class DashboardPantryStocked extends React.Component {
  static navigationOptions = {
    title: 'Kitchen Fox Dashboard',
  };

  render() {
    return (
      <Container>
        <Content>
          <Text>
            DASHBOARD page when user and items in their pantry
          </Text>
        </Content>
      </Container>
    );
  }
}

export default DashboardPantryStocked;
