import { AppRegistry } from 'react-native';
import React from 'react';
import configureStore from '../store/store';
import Root from './root';

const store = configureStore();

const Entry = () => (
  <Root store={store} />
);

AppRegistry.registerComponent('KitchenFox', () => Entry);
