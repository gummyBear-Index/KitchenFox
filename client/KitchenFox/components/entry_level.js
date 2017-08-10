import { AppRegistry } from 'react-native';
import React from 'react';
import configureStore from '../store/store';
import Root from './root';
import { getLocalToken } from '../util/session_api_util';

let preloadedState;

getLocalToken().then(token => {
  if (token) {
    preloadedState = {
      session: {
        token,
      }
    };
  } else {
    preloadedState = {};
  }
});

const store = configureStore(preloadedState);

const Entry = () => (
  <Root store={store} />
);

AppRegistry.registerComponent('KitchenFox', () => Entry);
