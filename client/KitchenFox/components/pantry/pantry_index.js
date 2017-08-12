import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Content, List, ListItem, Button,
Card, CardItem, Left, Text } from 'native-base';
import { button } from '../../style/button';

import NavFooter from '../nav/footer';

class PantryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: 0,
      units: ''
    }

    this.renderItems = this.renderItems.bind(this);
  }

  componentWillMount() {
    if (this.props.session.token) {
      this.props.requestItems(this.props.session.token);
    }
  }

  handleLogout() {
    this.props.logout();
  }

  static navigationOptions = {
    title: `Hello, username! Here's Your Ingredients`,
    headerLeft: null
  };

  renderItems() {
    const { navigate } = this.props.navigation;
    const allId = Object.keys(this.props.inventory);
    const allItems = [];
    allId.forEach((id) => {
      let obj = {};
      obj[`${id}`] = this.props.inventory[`${id}`]
      allItems.push(obj);
    })

    // console.warn(JSON.stringify(allItems));
    if (allItems.length > 0) {
      return (
        <List>
        {allItems.map((item, idx) =>
          <ListItem key={idx} onPress={() => {
            navigate('PantryItem', { item });
          }}>
            <Text>
              {Object.values(item)[0]['name']}: &nbsp;
              {Object.values(item)[0]['quantity']} &nbsp;
              {Object.values(item)[0]['units']}
            </Text>
          </ListItem>
        )}
      </List>
      )
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const fullName = `${this.props.session.first_name} ${this.props.session.last_name}`;
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>
                Hello, {fullName}! Here is Your Ingredients.
              </Text>
            </ListItem>
            {this.renderItems()}
          </List>
          <Button
            style={button.sessionButton}
            onPress={(e) => this.handleLogout()}
            >
            <Text>LOGOUT</Text>
          </Button>
        </Content>
        <NavFooter navigate={navigate} />
      </Container>
    );
  }
}

export default PantryIndex;
