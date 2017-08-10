import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Content, List, ListItem, Text } from 'native-base';

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
            <ListItem>
              <Text>Asparagus</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

export default PantryCategoryIndex;
