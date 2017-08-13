import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { Container, Content, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, List } from 'native-base';
import  {button} from '../../style/button';
import { getRecipes } from '../../util/api_util';
import  RecipeCard from './recipe_card';
import CheckBox from 'react-native-checkbox';
import { screen, pantry } from '../../style/layout';
import { text, pantryText } from '../../style/text';




class RecipesIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [],
      query: {},
    };
    this.fetchRecipes = this.fetchRecipes.bind(this);
  };
  static navigationOptions = {
    title: 'Recipes',
  };

  componentWillMount() {
    // this.props.requestItems(this.props.session.token);
    // getRecipes(5, this.props.session.token).then((res) => {
    //   this.setState({recipes: JSON.parse(res._bodyText)})
    // });
  }

  fetchRecipes(query) {
    if (query === "all") {
    getRecipes(5, null, this.props.session.token).then((res) => {
      this.setState({recipes: JSON.parse(res._bodyText)})
    });
  } else {
    getRecipes(5, (Object.values(this.state.query).join("+")), this.props.session.token).then((res) => {
      this.setState({recipes: JSON.parse(res._bodyText)})
    });
    }
  }

  checkBoxUpdate(checked, idx, name){
    const newQuery = Object.assign(this.state.query);
    if (checked === true) {
      newQuery[idx] = name;
    } else {
      delete newQuery[idx]
    }
    this.setState({query: newQuery});
  }

  renderItems() {
    const allId = Object.keys(this.props.inventory);
    const allItems = [];
    allId.forEach((id) => {
      let obj = {};
      obj[`${id}`] = this.props.inventory[`${id}`];
      allItems.push(obj);
    });

    if (allItems.length > 0) {
      return (
        <View>
        {allItems.map((item, idx) =>
          <View key={idx} style={pantry.itemContainer}>
            <Text style={pantryText.item}>{Object.values(item)[0]['name']}</Text>
            <Text style={pantryText.itemDesc}>{Object.values(item)[0]['quantity']}&nbsp;{Object.values(item)[0]['units']}</Text>
              <CheckBox
                key={idx}
                label={""}
                checked={new Boolean(this.state.query[idx])}
                onChange={(checked) => this.checkBoxUpdate(!checked, idx, Object.values(item)[0]['name'])}
              />
          </View>
        )}
      </View>
      );
    }
  }

  recipes(){
    let recipes = [];
    const { navigate } = this.props.navigation;
    if (this.state.recipes.length > 0) {
      for (let i = 0; i < this.state.recipes.length; i++) {
        let j = (
          <RecipeCard key={i} recipeInfo={this.state.recipes[i]} />
        );
        recipes.push(j);
      }
      return recipes;
    } else {
      return (
      <Container>
          <Text>Sorry, No recipes matched with all the ingredients</Text>
          <Button style={button.sessionButton} onPress={() => {
              navigate('AddItem');
          }}>
          <Text>Add Items</Text>
          </Button>
      </Container>
    )
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const recipes = this.recipes();
    const items = this.renderItems();
    if (this.state.recipes.length === 0) {
      return (
        <Container>
          <Text>Recipes will go here!</Text>
          <Content>
            {items}
          </Content>
          <Button style={button.sessionButton} onPress={() => this.fetchRecipes("none")}>
          <Text>Fetch with Checked Items</Text>
          </Button>
          <Button style={button.sessionButton} onPress={() => this.fetchRecipes("all")}>
          <Text>Fetch with All Items</Text>
          </Button>
        </Container>
      )
    } else {
    return (
      <Container>
        <Text>Recipes will go here!</Text>
        <Content>
          {recipes}
        </Content>
      </Container>
    );
    }
  }
}

export default RecipesIndex;
