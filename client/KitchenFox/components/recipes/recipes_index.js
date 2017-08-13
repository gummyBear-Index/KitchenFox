import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image } from 'react-native';
import { Container, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, List } from 'native-base';
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
    getRecipes("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjU5OGY4Y2EzMmQyM2M4MDAyYjA0N2U0MiIsInVzZXJuYW1lIjoiY2hlcnJ5IiwiaWF0IjoxNTAyNTc5OTE1fQ.DMXhju-kH3nEkSQXY73TkxJMYUTYEJf6cpOPhr2yATU").then((res) => {
      // console.warn({JSON.parse(res._bodyText)});
      this.setState({recipes: JSON.parse(res._bodyText)})
    });
  }

  recipes(){
    const recipes = [];
    if (this.state.recipes.length > 0) {
      for (let i = 0; i < this.state.recipes.length; i++) {
        let j = (
          <RecipeCard key={i} recipeInfo={this.state.recipes[i]} />
        );
        recipes.push(j);
      }
    }
    return recipes;
  }

  // renderRecipes() {
  //   const allId = Object.keys(this.props.inventory);
  //   const allItems = [];
  //   allId.forEach((id) => {
  //     let obj = {};
  //     obj[`${id}`] = this.props.inventory[`${id}`]
  //     allItems.push(obj);
  //   })
  //
  //   // console.warn(JSON.stringify(allItems));
  //   if (allItems.length > 0) {
  //     return (
  //       <List>
  //       {allItems.map((item, idx) =>
  //         <ListItem key={idx} onPress={() => {
  //           navigate('PantryItem', { item });
  //         }}>
  //           <Text>
  //             {Object.values(item)[0]['name']}: &nbsp;
  //             {Object.values(item)[0]['quantity']} &nbsp;
  //             {Object.values(item)[0]['units']}
  //           </Text>
  //         </ListItem>
  //       )}
  //     </List>
  //     )
  //   }
  // }


  render() {
    const recipes = this.recipes();
    // console.warn(this.state.recipes);
    // console.warn(recipes);
    return (
      <Container>
        <Text>Recipes will go here!</Text>
        <List>
          {recipes}
        </List>
      </Container>
    );
  }
}

export default RecipesIndex;
