import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import { View } from 'react-native';
import { Container, Content, List, Picker, Item, Icon, InputGroup, Input, ListItem, Text, Card, CardItem, Body, Left, Button } from 'native-base';
import { button } from '../../style/button';
import { screen, pantry } from '../../style/layout';
import { text, pantryText } from '../../style/text';

import { connect } from 'react-redux';
import { sendItems, requestItems } from '../../actions/inventory_actions';

class PantryItem extends React.Component {
  constructor(props) {
    super(props)

    const item = this.props.navigation.state.params.item;
    this.state = {
      name: Object.values(item)[0]['name'],
      quantity: Object.values(item)[0]['quantity'],
      units: Object.values(item)[0]['units']
    }
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    const { navigate } = this.props.navigation;
    const token = this.props.session.token;
    const item = this.props.navigation.state.params.item;
    const key = Object.keys(item)[0];
    const inventory = {
      inventory: {}
    };
    inventory['inventory'][`${key}`] = Object.assign(this.state);
    this.props.sendItems(token, inventory);
    this.props.requestItems(this.props.session.token);
    navigate('PantryIndex');
  }

  static navigationOptions = {
    title: 'Update Inventory',
  };

  render() {
    const item = this.props.navigation.state.params.item;
    const name = this.state.name;
    const qty = this.state.quantity;
    const units = this.state.units;
    return (
      <Container>
        <View style={screen.container}>
          <View style={pantry.addItem}>
          <Text style={pantryText.addItem}>
            {name}
          </Text>
          </View>
            <InputGroup style={pantry.updateQuan}>
              <Input
                keyboardType='numeric'
                style={pantry.child}
                onChangeText={(num) => {this.setState({quantity: num});}}
              >{`${qty}`}</Input>
              <Text style={pantry.child}>{units}</Text>
            </InputGroup>

          <Button
            style={button.sessionButton}
            onPress={() => this.handleUpdate()}
            >
            <Text>UPDATE</Text>
          </Button>
          <Button
            style={button.sessionButton}
            onPress={() => (this.setState({quantity: 0}))}
            >
            <Text>DELETE</Text>
          </Button>
        </View>
      </Container>
    );
  }
}

const mapStateToProps = ({ session, inventory }) => ({
  session,
  inventory
});

const mapDispatchToProps = dispatch => ({
  sendItems: (token, inventory) => dispatch(sendItems(token, inventory)),
  requestItems: token => dispatch(requestItems(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(PantryItem);
