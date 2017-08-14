import React, { Component } from 'react';

import { Container, Content, List, ListItem, Button,
  Card, CardItem, Left, Text } from 'native-base';
import { View, TouchableHighlight, ScrollView } from 'react-native';

import EmptyPantry from './pantry_empty';
import { ACTIVE_TAB, ORANGE_LIGHT, BLUE_LIGHT } from '../../style/common';
import { screen, pantry } from '../../style/layout';
import { button } from '../../style/button';
import { text, pantryText } from '../../style/text';

import CustomStatusBar from '../misc/status_bar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { requestItems } from '../../actions/inventory_actions';
import NavFooter from '../nav/footer';

class PantryIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: 0,
      units: '',
    };
    this.renderItems = this.renderItems.bind(this);
  }

  componentDidMount() {
    this.props.requestItems(this.props.session.token);
  }

  componentWillReceiveProps(newProps) {
  }


  handleLogout() {
    this.props.logout();
  }

  renderItems() {
    const { navigate } = this.props.navigation;
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
          <TouchableHighlight
            key={idx}
            underlayColor={ORANGE_LIGHT}
            onPress={() => {navigate('PantryItem', { item });
          }}>
          <View style={pantry.itemContainer}>
            <Text style={pantryText.item}>{Object.values(item)[0]['name']}</Text>
            <Text style={pantryText.itemDesc}>{Object.values(item)[0]['quantity']}&nbsp;{Object.values(item)[0]['units']}</Text>
          </View>
          </TouchableHighlight>
        )}
      </View>
      );
    } else if (allItems.length === 0) {
      return (<EmptyPantry navigation={this.props.navigation} />);
    }
  }

  render() {
    const { navigate } = this.props.navigation;
    const fullName = `${this.props.session.first_name} ${this.props.session.last_name}`;
    return (
      <Container>
         <View style={screen.container}>
           <CustomStatusBar />
            <ScrollView>
              <Text style={text.titleCenter}>
                Your Ingredients
              </Text>
              {this.renderItems()}
              <View style={{paddingTop: 16}} />
              <TouchableHighlight
                style={button.posFormButtonRecipe}
                underlayColor={BLUE_LIGHT}
                onPress={(e) => this.handleLogout()}>
                <Text style={text.posButtonRecipe}>logout</Text>
              </TouchableHighlight>
            </ScrollView>
           </View>
        <NavFooter navigation={this.props.navigation} />
       </Container>
    );
  }
}

const mapStateToProps = ({ session, inventory }) => ({
  session,
  inventory
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  requestItems: token => dispatch(requestItems(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(PantryIndex);
