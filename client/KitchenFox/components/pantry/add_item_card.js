import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, Text, View } from 'native-base';

class AddItemCard extends Component {
  render() {
    return (
      <Container>
        <Text>Sign In</Text>
      </Container>
    );
  }
}

export default AddItemCard;



// <div className="perk-card">
//   <div className="perk-price">${props.price}</div>
//   <div className="perk-title">{props.title}</div>
//   <div className="perk-description">{props.description}</div>
//   <div onClick={() => props.updateParent(amount)} className="perk-get">get this perk</div>
// </div>
