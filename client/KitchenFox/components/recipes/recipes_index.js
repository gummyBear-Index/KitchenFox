import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { Container, Content, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, List } from 'native-base';
import  {button} from '../../style/button';
import { getRecipes } from '../../util/api_util';
import  RecipeCard from './recipe_card';


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
    getRecipes(this.props.session.token).then((res) => {
      this.setState({recipes: JSON.parse(res._bodyText)})
    });
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

export default RecipesIndex;
