import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Image, TouchableHighlight, Linking, View } from 'react-native';
import {
  Container,
  Content,
  Header,
  Card,
  CardItem,
  Title,
  Button,
  Icon,
  Body,
  Left,
  Text,
  Navigator,
  ListItem,
} from 'native-base';

import { recipe } from '../../style/layout';
import { overlayText } from '../../style/text';

class RecipeCard extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableHighlight onPress={() => {
            Linking.openURL(`${this.props.recipeInfo.url}`).catch(err => console.error('An error occurred', err));
          }}>
          <View>
            <Image source={{uri:this.props.recipeInfo.image}} 
                    style={recipe.image}>
              <Text style={overlayText.fullOpacity}>{this.props.recipeInfo.label}</Text>
            </Image>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

export default RecipeCard;
