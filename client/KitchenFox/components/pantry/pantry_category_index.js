import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Content, List, ListItem, Text, Card, CardItem, Body, Left } from 'native-base';

class PantryCategoryIndex extends React.Component {
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
            <Text>Asparagus</Text>
            <Text note>Running Low</Text>
          </Body>
        </Left>
      </CardItem>
    </Card>
  );
};

export default PantryCategoryIndex;
