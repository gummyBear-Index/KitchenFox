import React, { Component } from 'react';
import { StyleSheet } from 'react-native';

export const camera = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   flexDirection: 'column',
  // },
  container: {
    flex: 1,
    justifyContent: "center",
    // width:300,
    // height:5,
    backgroundColor: "transparent",
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  square: {
    height:250,
    width:200,
    borderWidth: 3,
    borderRadius:4,
    borderColor: 'red',
  },
  capture: {
    flex: 0,
    backgroundColor: 'white',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
