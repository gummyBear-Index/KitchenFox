import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Content, List, ListItem, Button,
Card, CardItem, Left, Text } from 'native-base';
import { logout } from '../../actions/session_actions';
import { button } from '../../style/button';

import NavFooter from '../nav/footer';

class PantryCategoriesIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  static navigationOptions = {
    title: `Hello, username! Here's Your Ingredients`,
    headerLeft: null
  };

  handleLogout() {
    this.props.logout();
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container>
        <Content>
          <List>
            <Text>{JSON.stringify(this.props.session.username)}</Text>
            <ListItem itemDivider>
              <Text onPress={() => navigate('PantryCategory')}>Veggies</Text>
            </ListItem>
            <ListItem >
              <Text>Tomatoes</Text>
            </ListItem>
            <ListItem>
              <Text>Asparagus</Text>
            </ListItem>
            <ListItem itemDivider>
              <Text>Fruits</Text>
            </ListItem>
            <ListItem>
              <Text>Apple</Text>
            </ListItem>
            <ListItem>
              <Text>Orange</Text>
            </ListItem>
          </List>
          <Button
            style={button.sessionButton}
            onPress={(e) => this.handleLogout()}
            >
            <Text>LOGOUT</Text>
          </Button>
        </Content>
        <NavFooter navigate={navigate} />
      </Container>
    );
  }
}

const mapStateToProps = ({ session }) => ({
  session,
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  logout: () => dispatch(logout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(PantryCategoriesIndex);
