import { AppRegistry } from 'react-native';
import React, { Component } from 'react';

// import configureStore from '../store/store';
import Root from './root';

// const store = configureStore();

const Entry = () => (
  <Root />
);

AppRegistry.registerComponent('MobileApp', () => Entry);
// <Root store={store} />
// window.store = store;
