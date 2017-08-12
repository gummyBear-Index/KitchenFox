import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, View, List } from 'native-base';
import md5 from 'md5';

import AddItemCard from './add_item_card';

class AddItems extends React.Component {
  constructor(props) {
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
        let newQuant = inventory[upc].quantity;
        newQuant = parseInt(newQuant);
        newQuant += parseInt(item.quantity);
        inventory[upc].quantity = newQuant;
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
    if (!blanks.length) {
      this.updateNumItemCards(this.state.numItemCards + 1);
    }
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
          updateParent={(cardNum, localState) => this.handleCardUpdate(cardNum, localState)}
          token={this.props.session.token} />
      );
      itemCards.push(j);
    }
    return itemCards;
  }



  static navigationOptions = {
    title: 'Add items your pantry',
  };



  render() {
    const itemCards = this.itemFormGen(this.state.numItemCards);
    return (
      <List>
        {itemCards}
      </List>
    );
  }
}

export default AddItems;
