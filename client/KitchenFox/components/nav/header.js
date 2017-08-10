import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';
import { Left, Text, Body, Header, Right, Icon, Title } from 'native-base';

const Header = () => {
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name='arrow-back' />
        </Button>
      </Left>
      <Body>
        <Title>Ingredients</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name='menu' />
        </Button>
      </Right>
    </Header>
  );
};

export default Header;
