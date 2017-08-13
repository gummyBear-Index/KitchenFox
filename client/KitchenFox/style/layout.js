import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';

import { BLUE, WHITE, ORANGE } from './common';

export const session = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    // backgroundColor: 'white',
    // alignSelf: 'center'
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  greetingDarkness: {
    backgroundColor: 'rgba(6,186,235,.85)',
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
  },
  sessionDarkness: {
    backgroundColor: 'rgba(255,255,255,.83)',
    flex: 1,
    width: undefined,
    height: undefined,
    justifyContent: 'center',
  },
  content: {
    paddingLeft: 28,
    paddingRight: 28,
    paddingBottom: 20,
    paddingTop: 20,
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
    // backgroundColor: 'white',
    // borderRadius: 40,
  }
});

export const screen = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'white',
    // alignSelf: 'center'
    // justifyContent: 'center',
    // alignItems: 'center',
  },
});

export const pantry = StyleSheet.create({
  container: {
    // flex: 1,
    // flexDirection: 'column',
  },
  itemContainer: {
    backgroundColor: ORANGE,
    paddingTop: 18,
    paddingBottom: 18,
    paddingLeft: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  }
});


