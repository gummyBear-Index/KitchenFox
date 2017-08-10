import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Button } from 'native-base';

class PantryCategoryIndex extends React.Component {
  static navigationOptions = {
    title: 'Kitchen ingredients you have',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
          <Button onPress={() => navigate('Veggies')}>
            <Text>Veggies</Text>  
          </Button>  
         <Text>veggies oranges etc</Text>  
      </View>
    );
  }
}

class VeggieScreen extends React.Component {
  static navigationOptions = {
    title: 'Veggies',
  };

  render() {
    return (
      <Text>All the veggies you own: tomatoes, pototo</Text>
    );
  }
}

const Pantry = StackNavigator({
  Pantry: { screen: PantryCategoryIndex },
  Veggies: { screen: VeggieScreen },
});

export default Pantry;