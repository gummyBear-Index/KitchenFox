import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';

export const session = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  darkness: {
    backgroundColor: 'rgba(0,0,0,.48)',
    flex: 1,
    width: undefined,
    height: undefined,
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 30,
    paddingBottom: 20,
  },
  header: {
    marginTop: 80,
  },
  groupButtons: {
    paddingTop: 15,
  },
});
