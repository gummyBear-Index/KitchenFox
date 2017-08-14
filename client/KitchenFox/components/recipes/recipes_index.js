import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Container, Content, Header, View, DeckSwiper, Card, CardItem, Thumbnail, Text, Left, Body, Icon, Button, List } from 'native-base';
import { getRecipes } from '../../util/api_util';
import  RecipeCard from './recipe_card';
import CheckBox from 'react-native-checkbox';
import { Image, TouchableHighlight, ScrollView } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';


import  { ORANGE, ORANGE_LIGHT, ORANGE_LIGHTER, WHITE } from '../../style/common';
import  { button } from '../../style/button';
import { screen, pantry } from '../../style/layout';
import { text, pantryText } from '../../style/text';

class RecipesIndex extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      recipes: "none",
      query: {},
      spinner: false,
    };
    this.fetchRecipes = this.fetchRecipes.bind(this);
  }
  // static navigationOptions = {
  //   title: 'Recipes',
  // };


  fetchRecipes(query) {
    this.setState({spinner: true});
    if (query === "all") {
    getRecipes(5, null, this.props.session.token).then((res) => {
      this.setState({recipes: JSON.parse(res._bodyText)});
      this.setState({spinner: false});
    });
  } else {
    getRecipes(5, (Object.values(this.state.query).join("+")), this.props.session.token).then((res) => {
      this.setState({recipes: JSON.parse(res._bodyText)});
      this.setState({spinner: false});
    });
    }
  }

  checkBoxUpdate(checked, idx, name){
    const newQuery = Object.assign(this.state.query);
    if (checked === true) {
      newQuery[idx] = name;
    } else {
      delete newQuery[idx];
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
            <CheckBox
              checkboxStyle={{
                backgroundColor: ORANGE_LIGHT,
                tintColor: WHITE,
                width: 18,
                height: 18,
              }}
              underlayColor={ORANGE}
              key={idx}
              label={""}
              checked={new Boolean(this.state.query[idx])}
              onChange={(checked) => this.checkBoxUpdate(!checked, idx, Object.values(item)[0]['name'])}
            />
            <Text style={pantryText.itemForRecipe}>{Object.values(item)[0]['name']}</Text>
            <Text style={pantryText.itemDesc}>{Object.values(item)[0]['quantity']}&nbsp;{Object.values(item)[0]['units']}</Text>
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
          <Text style={text.titleCenter}>Sorry, No recipes matched with all the ingredients</Text>
          <TouchableHighlight style={button.sessionButton} onPress={() => {
              navigate('AddItem');
          }}>
          <Text>Add Items</Text>
          </TouchableHighlight>
      </Container>
    );
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const recipes = this.recipes();
    const items = this.renderItems();
    let spinner;
    if (this.state.spinner) {
      // spinner = (<Content><Spinner color='blue'/></Content>);
        spinner = (<View style={{ flex: 1 }}><Spinner visible={true} textContent={"Loading..."} textStyle={{color: '#FFF'}} /></View>);

    } else {
      spinner = (<View style={{ flex: 1 }}><Spinner visible={false} textContent={"Loading..."} textStyle={{color: '#FFF'}} /></View>);
      // spinner =  (<Content></Content>);
    }
    if (this.state.recipes === "none") {
      return (
        <View style={screen.container}>
          <Text style={text.titleCenter}>I want to cook with...</Text>
          <ScrollView>
            {items}
          </ScrollView>
            {spinner}
          <View style={pantry.groupButtons}>
            <TouchableHighlight style={button.negFormButtonRecipe} onPress={() => this.fetchRecipes("all")}>
              <Text style={text.negButtonRecipe}>all my food</Text>
            </TouchableHighlight>

            <TouchableHighlight style={button.posFormButtonRecipe} onPress={() => this.fetchRecipes("none")}>
              <Text style={text.posButtonRecipe}>my selected food</Text>
            </TouchableHighlight>
          </View>
        </View>
      );
    } else {
    return (
      <Container>
        <Text style={text.titleDiminished}>Recipes you can make</Text>
        <Content>
          {recipes}
        </Content>
      </Container>
    );
    }
  }
}

export default RecipesIndex;
