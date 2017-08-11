import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';
import { Container, Content, List, ListItem, Text, Card, CardItem, Body, Left, Button } from 'native-base';
import { button } from '../../style/button';

class PantryItem extends React.Component {
  static navigationOptions = {
    title: 'Update Inventory',
  };

  render() {
    const item = this.props.navigation.state.params.item;
    const name = Object.values(item)[0]['name'];
    const qty = Object.values(item)[0]['quantity'];
    const units = Object.values(item)[0]['units'];
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemDivider>
              <Text>You have {name} {qty} {units}.</Text>
            </ListItem>
            <ListItem>
              <Text>Type a number : </Text>
            </ListItem>
            <ListItem>
              <Text>Select units : </Text>
            </ListItem>
          </List>
          <Button
            style={button.sessionButton}
            >
            <Text>UPDATE</Text>
          </Button>
          <Button
            style={button.sessionButton}
            >
            <Text>DELETE</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

// const PantryCategoryItemCard = () => {
//   return (
//     <Card>
//       <CardItem>
//         <Left>
//           <Body>
//             <Text>Asparagus</Text>
//             <Text note>Running Low</Text>
//           </Body>
//         </Left>
//       </CardItem>
//     </Card>
//   );
// };

const mapStateToProps = ({ session, inventory }) => ({
  session,
  inventory
});

const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  logout: () => dispatch(logout()),
  // requestItems: token => dispatch(requestItems(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(PantryItem);
