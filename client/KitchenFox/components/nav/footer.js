import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Text } from 'native-base';

const NavFooter = () => {
  return (
    <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="add-circle" />
              <Text>Add Item</Text>
            </Button>
            <Button vertical>
              <Icon name="clipboard" />
              <Text>Dashboard</Text>
            </Button>
            <Button vertical active>
              <Icon active name="albums" />
              <Text>Pantry</Text>
            </Button>
            <Button vertical>
              <Icon name="book" />
              <Text>Recipes</Text>
            </Button>
          </FooterTab>
        </Footer>
  );
};

export default NavFooter;
