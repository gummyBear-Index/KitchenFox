import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import { View } from 'react-native';
import { Container, Content, List, ListItem, Text, Button } from 'native-base';
import { requestItems } from '../../actions/inventory_actions';
import { button } from '../../style/button';
import { screen } from '../../style/layout';
import { text } from '../../style/text';

import NavFooter from '../nav/footer';
import RecipeCard from '../recipes/recipe_card';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: 0,
      units: ''
    };
  }

  componentWillMount() {
    if (this.props.session.token) {
      this.props.requestItems(this.props.session.token);
    }
  }

  static navigationOptions = {
    title: 'Kitchen Fox Dashboard',
  };

  header() {
    return (
      <Text style={text.titleCenter}>
          Your Dashboard
      </Text>
    );
  }

  render() {
    const { navigate } = this.props.navigation;
    const allId = Object.keys(this.props.inventory);
    const lowItems = [];
    const allItems = [];
    allId.forEach((id) => {
      let obj = {};
      const item = this.props.inventory[`${id}`];
      if (item['units'] == 'g' && item['quantity'] <= 1000) {
        obj[`${id}`] = item;
        lowItems.push(obj);
      } else if (item['units'] == 'each' && item['quantity'] <= 30) {
        obj[`${id}`] = item;
        lowItems.push(obj);
      }
      obj[`${id}`] = item;
      allItems.push(obj);
    })

    if (allItems.length > 0 && lowItems.length === 0) {
      return(
        <Container>
          {this.header()}
          <ListItem itemDivider>
            <Text>
              Looks like you are not running low on inventory
            </Text>
          </ListItem>
          <Button
            style={button.sessionButton}
            onPress={() => {
              navigate('PantryIndex');
            }}
            >
            <Text>Manage Your Kitchen Inventory</Text>
          </Button>
          <NavFooter navigate={navigate} />
        </Container>
      )
    } else if (lowItems.length > 0) {
      return(
        <Container>
          {this.header()}
          <ListItem itemDivider>
            <Text>
              Looks like you are running low on :
            </Text>
          </ListItem>
            {lowItems.map((item, idx) =>
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
          <ListItem itemDivider>
            <Text>
              Cooking ideas based on your Ingredients :
            </Text>
          </ListItem>
          <ListItem>
            {RecipeCard}
          </ListItem>
          <NavFooter navigate={navigate} />
        </Container>
      )
    } else if (allItems.length === 0) {
      return(
        <Container>
          {this.header()}
          <ListItem itemDivider>
            <Text>
              There is nothing in your pantry or fridge
            </Text>
          </ListItem>
          <ListItem onPress={() => {navigate('AddItem');}}>
            <Text>Add Item</Text>
          </ListItem>
        </Container>
      )
    }
  }
}

const mapStateToProps = ({ session, inventory }) => ({
  session,
  inventory
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestItems: token => dispatch(requestItems(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
