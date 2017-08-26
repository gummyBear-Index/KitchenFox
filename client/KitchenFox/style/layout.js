import React, { Component } from 'react';
import { StyleSheet, Dimensions, Image, StatusBar, Platform } from 'react-native';

import { BLUE, BLUE_DARK, WHITE, ORANGE, ORANGE_LIGHT, ORANGE_LIGHTER, TITLE, BASE_FONT_LIGHT, BASE_FONT_REGULAR, BASE_FONT_BOLD } from './common';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;

export const session = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
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
    width: 128,
    height: 128,
  }
});

export const screen = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'white',
  },
});

export const pantry = StyleSheet.create({
  container: {
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
    height: 70,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center'
  },
  child: {
    width: 80,
    color: WHITE,
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
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ORANGE,
    flexWrap: 'wrap',
    borderTopLeftRadius: 5, 
    borderTopRightRadius: 5,        
  },
  rowQuan: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: ORANGE_LIGHT,
    flexWrap: 'wrap',
    marginTop: -1,
    borderBottomLeftRadius: 5, 
    borderBottomRightRadius: 5, 
  },
  name: {
    flex: 4,
    paddingLeft: 5,
  },
  quan: {
    flex: 1,
    paddingLeft: 15,
    paddingTop: 6,
    paddingBottom: 6,
  },
  quanUnit: {
    flex: 1,
  },
  scanner: {
    backgroundColor: '#666',
    width: null,
    height: null,
    borderTopRightRadius: 5,    
  }
});

export const recipe = StyleSheet.create({
  image: {
    height: 250,
    width: null,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    borderBottomWidth: 4,
    borderColor: 'white',
  }
});

export const card = StyleSheet.create({
  container: {
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
  },
  titleLeftLarge: {
    fontSize: 28,
    paddingTop: 20,
    paddingBottom: 16,
    paddingLeft: 4,
    paddingRight: 8,
    textAlign: 'left',
    color: TITLE,
    fontFamily: BASE_FONT_REGULAR,
    flexWrap: 'wrap',
    flex: 5,
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center'
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
  },
});

export const icon = StyleSheet.create({
  back: {
    color: '#ccc',
    paddingLeft: 15,
    paddingTop: 10,
    marginBottom: 0,
    alignSelf: 'center',
    fontSize: 30,
  },
  backPadding: {
    color: 'transparent',
    fontSize: 40,
  },
});

export const bar = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor:'white',
    height: APPBAR_HEIGHT,
  },
});
