import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, TouchableHighlight, Linking} from 'react-native';
import {
  Container,
  Content,
  Header,
  Card,
  CardItem,
  Title,
  Button,
  Icon,
  View,
  Body,
  Left,
  Text,
  Navigator,
  ListItem,
} from 'native-base';
// style={{flex:0}}

class RecipeCard extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Card style={{flex:0}}>
        <TouchableHighlight onPress={() => {
            Linking.openURL(JSON.stringify(this.props.recipeInfo.url)).catch(err => console.error('An error occurred', err));
          }}>
        <Image source={{uri:this.props.recipeInfo.image}} style={{height: 200, width: 250}}/>
        </TouchableHighlight>
        <Text>{JSON.stringify(this.props.recipeInfo.label)}</Text>
        </Card>
    );
  }
}

export default RecipeCard;
