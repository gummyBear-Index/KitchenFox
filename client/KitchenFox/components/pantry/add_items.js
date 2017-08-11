import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, View } from 'native-base';
import md5 from 'md5';

import AddItemCard from './add_item_card';

class PantryAddItems extends React.Component {
  constructor() {
    super(props);
    this.state = {
      cart: [],
      numItemCards: 1,
    }
  }

  handleSubmit() {
    let inventory = Object.assign(this.props.inventory);
    this.cart.forEach((item) => {
      let upc = item.upc.length ? item.upc : md5(item.name)
      if (upc in inventory) {
        inventory[upc].quantity += item.quantity;
      } else {
        inventory[upc] = {
          name: item.name,
          quantity: item.quantity,
          units: item.units,
        }
        inventory[upc].weight = item.weight.length ? item.weight : 'NA';
      }
    });
    this.props.sendItems(this.props.session.token, inventory);
  };

  handleCardUpdate(idx, childState) {
    let obj = Object.assign(childState);
    const newCart = this.state.cart.slice(0);
    newCart[idx] = obj;
    this.setState({ cart: newCart });
    let numBlank = 0;
    let blanks = newCart.filter(item => (
      !(item.upc.length || item.name.length || item.name.quantity)
    ));
    blanks.length() === 0 ? updateNumItemCards(this.state.numItemCards + 1) : 0;
  }

  updateNumItemCards(newNumItemCards) {
    this.setState({ numItemCards: newNumItemCards });
    this.itemFormGen(newNumItemCards);
  }

  itemFormGen(numItemCards) {
    const itemCards = [];
    for (let i = 0; i < numItemCards; i++) {
      let j = (
        <AddItemCard
          key={`card-form-number-${i}`}
          cardNum={i}
          updateParent={(num, slice) => this.handleCardUpdate(num, slice)} />
      );
      itemCards.push(j);
    }
    return itemCards;
  }



  static navigationOptions = {
    title: 'Add items your pantry',
  };



  render() {
    const itemCards = this.perkFormGen(this.state.numItemCards);
    return (
      <View>
        {itemCards}
      </View>
    );
  }
}

export default PantryAddItems;
