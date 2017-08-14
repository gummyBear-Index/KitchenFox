import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { BLUE, BLUE_DARK } from '../../style/common';

// import PantryAddItems from '../pantry/add_items';
// import DashboardPantryStocked from '../dashboard/pantry_stocked';
// import PantryCategoriesIndex from '../pantry/pantry_categories_index';
// import RecipesIndex from '../recipes/recipes_index';

class NavFooter extends Component {
  // const { navigate } = this.props;
  constructor(props) {
    super(props);
  }

  render() {
    const light = { backgroundColor: BLUE };
    const dark = { backgroundColor: BLUE_DARK }
    const activeRoute = this.props.navigation.state.routeName;
    const { navigate } = this.props.navigation;
    return (
      <Footer>
        <FooterTab style={light}>
          <Button vertical
            style={activeRoute === 'AddItem' ? dark : light}
            onPress={() => navigate('AddItem')}>
            <Icon name="add-circle"
              style={{ color: 'white'}} />
            <Text style={{ color: 'white'}}>Add Item</Text>
          </Button>
          <Button vertical
            style={activeRoute === 'Dashboard' ? dark : light}
            onPress={() => navigate('Dashboard')}>
            <Icon name="clipboard"
              style={{ color: 'white'}} />
            <Text style={{ color: 'white'}}>Dashboard</Text>
          </Button>
          <Button vertical
            style={activeRoute === 'PantryIndex' ? dark : light}
            onPress={() => navigate('PantryIndex')}>
            <Icon active name="albums"
              style={{ color: 'white'}} />
            <Text style={{ color: 'white'}}>Pantry</Text>
          </Button>
          <Button vertical
            style={activeRoute === 'Recipes' ? dark : light}
            onPress={() => navigate('Recipes')}>
            <Icon name="book"
              style={{ color: 'white'}} />
            <Text style={{ color: 'white'}}>Recipes</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
};

export default NavFooter;

// const FooterLinking = StackNavigator({

// });
