import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image } from 'react-native';

import { BLUE, BLUE_DARK, WHITE, ORANGE, ORANGE_LIGHT, ORANGE_LIGHTER, TITLE, BASE_FONT_LIGHT, BASE_FONT_REGULAR } from './common';

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
    // flexDirection: 'row',
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
    borderBottomWidth: 1,
    borderColor: ORANGE_LIGHTER,
  },
  itemContainerSmall: {
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 84,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-end',
  },
  updateItem: {
    backgroundColor: ORANGE_LIGHT,
    alignItems: 'center',
    paddingTop: 34,
    paddingBottom: 34,
  },
  updateQuan: {
    backgroundColor: ORANGE,
    // flex: 1,
    height: 70,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  child: {
    // flex: 1,
    width: 80,
    color: WHITE,
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
    // flexWrap: 'wrap',
  },
  groupButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 18,
    paddingLeft: 1,
    paddingRight: 1,
  }
});

export const addItemCard = StyleSheet.create({
  container: {
    paddingBottom: 30,
    paddingLeft: 20,
    paddingRight: 20,
  },
  row: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ORANGE,
    flexWrap: 'wrap',
    // alignItems: 'flex-end',
    // borderBottomWidth: 0,
  },
  rowQuan: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ORANGE_LIGHT,
    flexWrap: 'wrap',
    // alignItems: 'flex-end',
  },
  name: {
    flex: 4,
    // paddingTop: 10,
    // paddingBottom: 7,
    paddingLeft: 5,
  },
  quan: {
    // backgroundColor: 'transparent',
    flex: 1,
    paddingLeft: 15,
    paddingTop: 6,
    paddingBottom: 6,
  },
  quanUnit: {
    // backgroundColor: 'transparent',
    flex: 1,
  },
  scanner: {
    backgroundColor: '#666',
    width: null,
    height: null,
  }
});

export const recipe = StyleSheet.create({
  image: {
    height: 250,
    width: null,
    alignItems: 'flex-start',
    // alignSelf: 'center',
    // marginBottom: 10,
    justifyContent: 'flex-start',
    borderBottomWidth: 4,
    borderColor: 'white',

  }
});

export const card = StyleSheet.create({
  container: {
    // backgroundColor: '#444',
    borderWidth: 1,
    borderColor: '#ddd',
    width: null,
    marginTop: 6,
    marginLeft: 6,
    marginRight: 6,
    padding: 0,
    marginBottom: 4,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    paddingTop: 7,
  },
  iconWarning: {
    color: ORANGE,
    fontSize: 60,
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    paddingLeft: 22,
    paddingRight: 2,
  },
  icon: {
    color: ORANGE,
    fontSize: 20,
  },
  titleLeft: {
    fontSize: 20,
    paddingTop: 8,
    paddingBottom: 12,
    paddingLeft: 4,
    paddingRight: 8,
    textAlign: 'left',
    color: TITLE,
    fontFamily: BASE_FONT_REGULAR,
    flexWrap: 'wrap',
    flex: 5,
    // width: 100,
    // flexDirection: 'column',
  },
  titleRecipe: {
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 8,
    textAlign: 'left',
    color: TITLE,
    fontFamily: BASE_FONT_REGULAR,
    flexWrap: 'wrap',
    flex: 5,
    // width: 100,
    // flexDirection: 'column',
  },
});
