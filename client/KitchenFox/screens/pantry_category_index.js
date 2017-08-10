import React, { Component } from 'react';
import { View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Container, Content, List, ListItem, Button,
Card, CardItem, Left, Text, Body } from 'native-base';

import NavFooter from '../components/nav/footer';

class PantryCategoriesList extends React.Component {
  static navigationOptions = {
    title: 'Kitchen ingredients you have',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text onPress={() => navigate('Veggies')}>Veggies</Text>
            </ListItem>                    
            <ListItem >
              <Text>Tomatoes</Text>
            </ListItem>
            <ListItem>
              <Text>Asparagus</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Fruits</Text>
            </ListItem>  
            <ListItem>
              <Text>Apple</Text>
            </ListItem>
            <ListItem>
              <Text>Orange</Text>
            </ListItem>
          </List>
        </Content>
        <NavFooter />
      </Container>
    );
  }
}

class VeggieScreen extends React.Component {
  static navigationOptions = {
    title: 'Veggies',
  };

  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text onPress={() => navigate('Veggies')}>Veggies</Text>
            </ListItem>                    
            <ListItem >
              <PantryCategoryItemCard />
            </ListItem>
            <ListItem>
              <Text>Asparagus</Text>
            </ListItem>
          </List>
        </Content>
      </Container>

    );
  }
}

const PantryCategoryItemCard = () => {
  return (
    <Card>
      <CardItem>
        <Left>
          <Body>
            <Text>NativeBase</Text>
            <Text note>GeekyAnts</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

const Pantry = StackNavigator({
  Pantry: { screen: PantryCategoriesList },
  Veggies: { screen: VeggieScreen },
  PantryCategory: { screen: PantryCategoryItemCard },
});

export default Pantry;