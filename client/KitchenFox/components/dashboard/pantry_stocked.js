import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Container, Content, List, ListItem, Text } from 'native-base';
import { requestItems } from '../../actions/inventory_actions';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      quantity: 0,
      units: ''
    }
  }

  componentWillMount() {
    if (this.props.session.token) {
      this.props.requestItems(this.props.session.token);
    }
  }


  static navigationOptions = {
    title: 'Kitchen Fox Dashboard',
  };

  renderAlert() {
    const { navigate } = this.props.navigation;
    const allId = Object.keys(this.props.inventory);
    const lowItems = [];
    const allItems = [];
    allId.forEach((id) => {
      let obj = {};
      const item = this.props.inventory[`${id}`];
      if (item['units'] == 'g' && item['quantity'] <= 100) {
        obj[`${id}`] = item;
        lowItems.push(obj);
      } else if (item['units'] == 'each' && item['quantity'] <= 3) {
        obj[`${id}`] = item;
        lowItems.push(obj);
      }
      obj[`${id}`] = item;
      allItems.push(obj);
    })

    if (lowItems.length > 0) {
      return(
        <List>
          <ListItem itemDivider>
            <Text>
              Looks like you are running low on :
            </Text>
          </ListItem>
          {lowItems.map((item, idx) =>
            <ListItem key={idx} onPress={() => {
                navigate('PantryItem', { item });
              }}>
              <Text>
                {Object.values(item)[0]['name']}: &nbsp;
                {Object.values(item)[0]['quantity']} &nbsp;
                {Object.values(item)[0]['units']}
              </Text>
            </ListItem>
          )}
          <ListItem itemDivider>
            <Text>
              Cooking ideas based on your Ingredients :
            </Text>
          </ListItem>
        </List>
      )
    } else if (lowItems.length === 0) {
      return(
        <List>
          <ListItem itemDivider>
            <Text>
              There is nothing in your pantry or fridge
            </Text>
          </ListItem>
          <ListItem onPress={() => {
              navigate('AddItem')
            }}><Text>Add Item</Text>
          </ListItem>
        </List>
      )
    }

  }

  render() {
    const { navigate } = this.props.navigation;
    const allId = Object.keys(this.props.inventory);
    const lowItems = [];
    const allItems = [];
    allId.forEach((id) => {
      let obj = {};
      const item = this.props.inventory[`${id}`];
      if (item['units'] == 'g' && item['quantity'] <= 100) {
        obj[`${id}`] = item;
        lowItems.push(obj);
      } else if (item['units'] == 'each' && item['quantity'] <= 3) {
        obj[`${id}`] = item;
        lowItems.push(obj);
      }
      obj[`${id}`] = item;
      allItems.push(obj);
    })

    if (lowItems.length > 0) {
      return(
        <List>
          <ListItem itemDivider>
            <Text>
              Looks like you are running low on :
            </Text>
          </ListItem>
          {lowItems.map((item, idx) =>
            <ListItem key={idx} onPress={() => {
                navigate('PantryItem', { item });
              }}>
              <Text>
                {Object.values(item)[0]['name']}: &nbsp;
                {Object.values(item)[0]['quantity']} &nbsp;
                {Object.values(item)[0]['units']}
              </Text>
            </ListItem>
          )}
          <ListItem itemDivider>
            <Text>
              Cooking ideas based on your Ingredients :
            </Text>
          </ListItem>
          <ListItem>
          </ListItem>
        </List>
      )
    } else if (lowItems.length === 0) {
      return(
        <List>
          <ListItem itemDivider>
            <Text>
              There is nothing in your pantry or fridge
            </Text>
          </ListItem>
          <ListItem onPress={() => {
              navigate('AddItem')
            }}><Text>Add Item</Text>
          </ListItem>
        </List>
      )
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// export default DashboardPantryStocked;
