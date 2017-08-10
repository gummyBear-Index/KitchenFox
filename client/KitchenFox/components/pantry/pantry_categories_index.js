import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, List, ListItem, Button,
Card, CardItem, Left, Text } from 'native-base';

import NavFooter from '../nav/footer';

class PantryCategoriesIndex extends React.Component {
  static navigationOptions = {
    title: 'Your Ingredients',
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
        <NavFooter navigate={navigate} />
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

export default PantryCategoriesIndex;
