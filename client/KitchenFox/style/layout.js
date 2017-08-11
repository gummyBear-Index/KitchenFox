import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export const session = StyleSheet.create({
  container: {
    flex: 1,
    width: undefined,
    height: undefined,
  },
  darkness: {
    backgroundColor: 'rgba(0,0,0,.45)',
    flex: 1,
    width: undefined,
    height: undefined,
  },
  content: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  header: {
    marginTop: 80,
  },
  groupButtons: {
    paddingTop: 15,
  },
});
