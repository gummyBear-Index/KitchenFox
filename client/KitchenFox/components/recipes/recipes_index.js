import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
import { getRecipes } from '../util/api_util';
import { RecipeCard } from './recipe_card';

const cards = [
  {
    text: 'Card One',
    name: 'One',
  },
];

class RecipesIndex extends React.Component {
  constructor(props){
    super(props)
    this.state = null;
  };
  static navigationOptions = {
    title: 'Recipes',
  };

  componentWillMount() {
    getRecipes.(this.state.token).then((res) => {
      this.setState(res)
    });
  }

  recipes(){
    const recipes = [];
    for (let i = 0; i < this.state.length; i++) {
      let j = (
        <RecipeCard recipeInfo={this.state[i]} />
      );
      recipes.push(j);
    }
    return recipes;
  }

  render() {
    const recipes = this.recipes();
    return (
      <Container>
        <Text>Recipes will go here!</Text>
        {recipes}
      </Container>
    );
  }
}

export default RecipesIndex;
