import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button } from 'native-base';
import { getRecipes } from '../../util/api_util';
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
    this.state = {
      recipes: []
    };
  };
  static navigationOptions = {
    title: 'Recipes',
  };

  componentWillMount() {
    getRecipes("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5OGQ0NjY1NzFiM2UwMTBkODdhOTg3MiIsInVzZXJuYW1lIjoiY2hlcnJ5IiwiaWF0IjoxNTAyNTc3Mjg3fQ.WBweI3-6HSS1-AZjkDJqDxOT9fG4JGdjqvrzuklU5yo").then((res) => {
      this.setState({recipes: res})
      console.warn(res._bodyText)
    });
  }

  recipes(){
    const recipes = [];
    for (let i = 0; i < this.state.recipes.length; i++) {
      let j = (
        <RecipeCard recipeInfo={this.state.recipes[i]} />
      );
      recipes.push(j);
    }
    return recipes;
  }

  render() {
    const recipes = this.recipes();
    // console.warn(this.state.recipes);
    // console.warn(recipes);
    return (
      <Container>
        <Text>Recipes will go here!</Text>
        {recipes}
      </Container>
    );
  }
}

export default RecipesIndex;
