import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Container, Content, List, ListItem, Text, Button, Icon, Spinner } from 'native-base';
import { requestItems } from '../../actions/inventory_actions';
import { button } from '../../style/button';
import NavFooter from '../nav/footer';
import RecipeCard from '../recipes/recipe_card';
import { getRecipes1 } from '../../util/api_util';

import { View, ScrollView, TouchableHighlight } from 'react-native';
import { screen, card, pantry } from '../../style/layout';
import { text, pantryText } from '../../style/text';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    let component = <View><Spinner color='blue' /></View>
    this.state = {
      name: '',
      quantity: 0,
      units: '',
      recipes: [],
      toRender: component,
    }
    this.renderRecipe = this.renderRecipe.bind(this);
    this.renderNoLowItem = this.renderNoLowItem.bind(this);
    this.renderLowItems = this.renderLowItems.bind(this);
    this.renderNoInventory = this.renderNoInventory.bind(this);
  }

  componentWillMount() {
    this.props.requestItems(this.props.session.token);
    this.selectToRender();
  }

  componentWillReceiveProps(newProps) {
    let items = Object.values(newProps.inventory);
    let item = items[Math.floor(Math.random()*items.length)];
    item = item.name;
    item = item.split(', ').join('');
    item = item.split(' ').join('');
    getRecipes1(1, item, newProps.session.token)
      .then((res) =>  {
        if (res.status === 503) {
          let dummy = [{'label': 'Strawberry, Melon & Ginger Sundaes', 'url':'http://www.bbcgoodfood.com/recipes/2384/strawberry-melon-and-ginger-sundaes', 'image':'https://www.edamam.com/web-img/6cf/6cf1b0d6b9bf021277435a236eb54ac1.jpg' }]
          this.setState({recipes: dummy});
          this.selectToRender()
        } else {
          this.setState({recipes: JSON.parse(res._bodyText)});
          this.selectToRender();
        }
      })
  }

  // componentWillReceiveProps(newProps) {
  //   let items = Object.values(newProps.inventory);
  //   let item = items[Math.floor(Math.random()*items.length)];
  //   item = item.name;
  //   getRecipes1(1, item, newProps.session.token)
  //     .then((res) => this.setState({recipes: JSON.parse(res._bodyText)}))
  //     .then(() => this.selectToRender())
  // }

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
    let toRender;
    if (allItems.length > 0 && lowItems.length === 0) {
      toRender = this.renderNoLowItem(allItems, lowItems);
    } else if (lowItems.length > 0) {
      toRender = this.renderLowItems(allItems, lowItems);
    } else {
      toRender = this.renderNoInventory();
    }
    this.setState({ toRender: toRender });
    this.forceUpdate();
  }

  renderRecipe() {
    if (this.state.recipes.length > 0) {
      return (<RecipeCard recipeInfo={this.state.recipes[0]} />)
    } else if (this.state.recipes.length === 0) {
      return (<View><Spinner color='blue' /></View>)
    }
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
          {this.state.toRender}
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
  requestItems: token => dispatch(requestItems(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
