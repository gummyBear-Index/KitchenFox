import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Container, Content, List, ListItem, Text, Button, Icon } from 'native-base';
import { requestItems } from '../../actions/inventory_actions';
import { button } from '../../style/button';
import NavFooter from '../nav/footer';
import RecipeCard from '../recipes/recipe_card';
import { getRecipes } from '../../util/api_util';

import { View, ScrollView, TouchableHighlight } from 'react-native';
import { screen, card, pantry } from '../../style/layout';
import { text, pantryText } from '../../style/text';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    let component = <Text>''</Text>
    this.state = {
      name: '',
      quantity: 0,
      units: '',
      recipes: [],
      toRender: component
    }
    this.renderRecipe = this.renderRecipe.bind(this);
    this.renderNoLowItem = this.renderNoLowItem.bind(this);
    this.renderLowItems = this.renderLowItems.bind(this);
    this.renderNoInventory = this.renderNoInventory.bind(this);
  }

  componentWillMount() {
    this.props.requestItems(this.props.session.token);
  }

  componentWillReceiveProps(newProps) {
    let items = Object.values(newProps.inventory);
    let item = items[Math.floor(Math.random()*items.length)];
    item = item.name;
    getRecipes(1, item, newProps.session.token)
      .then((res) => this.setState({recipes: JSON.parse(res._bodyText)}))
  }

  selectToRender () {
    const { navigate } = this.props.navigation;
    const allItems = [];
    const lowItems = [];
    const allId = Object.keys(this.props.inventory);
    allId.forEach((id) => {
      let obj = {};
      const item = this.props.inventory[`${id}`];
      if (item['units'] == 'g' && item['quantity'] <= 100) {
        obj[`${id}`] = item;
        lowItems.push(obj);
      } else if (item['units'] == 'each' && item['quantity'] <= 3) {
        obj[`${id}`] = item;
        lowItems.push(obj);
      }
      obj[`${id}`] = item;
      allItems.push(obj);
    })
    if (allItems.length > 0 && lowItems.length === 0) {
      return this.renderNoLowItem(allItems, lowItems);
    } else if (lowItems.length > 0) {
      return this.renderLowItems(allItems, lowItems);
    } else if (allItems.length === 0) {
      return this.renderNoInventory();
    }
  }

  renderRecipe() {
    if (this.state.recipes.length > 0) {
      return (<RecipeCard recipeInfo={this.state.recipes[0]} />)
    };

  }

  renderNoLowItem(allItems, lowItems) {
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <ListItem itemDivider>
          <Text>Looks like you are not running low on inventory</Text>
        </ListItem>
        <Button
          style={button.sessionButton} onPress={() => { navigate('PantryIndex'); }}>
          <Text>Manage Your Kitchen Inventory</Text>
        </Button>
        <ListItem itemDivider>
          <Text>Recipes you can make from your pantry</Text>
        </ListItem>
        <ListItem>
          {this.renderRecipe()}
        </ListItem>
      </Container>
    )
  }

  renderLowItems(allItems, lowItems) {
    const { navigate } = this.props.navigation;
    return(
      <View>
        <View style={card.container}>
          <View style={card.headerRow}>
            <Icon name="alert" style={card.iconWarning} />
            <Text style={card.titleLeft}>Looks like you are running low on some ingredients</Text>
          </View>
          {lowItems.map((item, idx) =>
          <TouchableHighlight key={idx} onPress={() => { navigate('PantryItem', { item }); }}>

            <View style={pantry.itemContainerSmall}>
              <Icon name='md-arrow-dropright'  style={card.icon} />
              <Text style={pantryText.itemDash}>{Object.values(item)[0]['name']}</Text>
              <Text style={pantryText.itemDescDash}>{Object.values(item)[0]['quantity']} {Object.values(item)[0]['units']}</Text>
            </View>
          </TouchableHighlight>)}
        </View>
        <View style={card.container}>
          <Text style={card.titleRecipe}>Recipe ideas</Text>
          {this.renderRecipe()}
      </View>
      </View>
    );
  }

  renderNoInventory() {
    const { navigate } = this.props.navigation;
    return(
      <Container>
        <ListItem itemDivider>
          <Text>There is nothing in your pantry or fridge</Text>
        </ListItem>
        <Button onPress={() => { navigate('AddItem'); }}>
          <Text>Add Item</Text>
        </Button>
      </Container>
    )
  }

  static navigationOptions = {
    title: 'Kitchen Fox Dashboard',
  };

  render() {
    const { navigate } = this.props.navigation;
    return(
      <View style={screen.container}>
        <ScrollView>
          <Text style={text.titleCenter}>Dashboard</Text>
          {this.selectToRender()}
        </ScrollView>
        <NavFooter navigation={this.props.navigation} />
      </View>
    );
  }
}

const mapStateToProps = ({ session, inventory }) => ({
  session,
  inventory
});

const mapDispatchToProps = dispatch => ({
  // logout: () => dispatch(logout()),
  requestItems: token => dispatch(requestItems(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
