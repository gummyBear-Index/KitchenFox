import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';

export const session = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'white',
    // alignSelf: 'center'
    justifyContent: 'center',
    // alignItems: 'center',
  },
  darkness: {
    // backgroundColor: 'rgba(0,0,0,.48)',
    flex: 1,
    width: undefined,
    height: undefined,
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  header: {
    marginTop: 80,
  },
  groupButtons: {
    paddingTop: 15,
  },
  logo: {
    alignSelf: 'center',
    // justifyContent: 'center',
    width: 128,
    height: 128,
  }
});
