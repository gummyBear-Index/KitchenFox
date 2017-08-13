import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

// import PantryAddItems from '../pantry/add_items';
// import DashboardPantryStocked from '../dashboard/pantry_stocked';
// import PantryCategoriesIndex from '../pantry/pantry_categories_index';
// import RecipesIndex from '../recipes/recipes_index';

const NavFooter = ({ navigate }) => {
  // const { navigate } = this.props;

  return (
    <Footer>
      <FooterTab>
        <Button vertical
          onPress={() => navigate('AddItem')}>
          <Icon name="add-circle" />
          <Text>Add Item</Text>
        </Button>
        <Button vertical
          onPress={() => navigate('Dashboard')}>
          <Icon name="clipboard" />
          <Text>Dashboard</Text>
        </Button>
        <Button vertical
          onPress={() => navigate('PantryIndex')} active>
          <Icon active name="albums" />
          <Text>Pantry</Text>
        </Button>
        <Button vertical
          onPress={() => navigate('Recipes')}>
          <Icon name="book" />
          <Text>Recipes</Text>
        </Button>
      </FooterTab>
    </Footer>
  );
};

export default NavFooter;

// const FooterLinking = StackNavigator({

// });
