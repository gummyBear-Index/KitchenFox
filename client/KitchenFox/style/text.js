import { StyleSheet } from 'react-native';
import { 
  BASE_FONT_LIGHT, 
  BASE_FONT_REGULAR, 
  BASE_FONT_BOLD, 
  BUTTON_ACTION_TEXT, 
  TITLE, BLUE, WHITE, ORANGE, ORANGE_LIGHT, ORANGE_LIGHTER,
  GREETING_TEXT } from './common';

const title = {
  fontSize: 30,
  paddingTop: 20,
  paddingBottom: 20,
};

export const text = StyleSheet.create({
  title,
  titleLeft: {
    fontSize: 36,
    paddingTop: 40,
    paddingBottom: 20,
    paddingLeft: 40,
    textAlign: 'left',
    color: TITLE,
    fontFamily: BASE_FONT_LIGHT,
  },
  titleSession: {
    fontSize: 50,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    textAlign: 'center',
    color: TITLE,
    fontFamily: BASE_FONT_LIGHT,
  },
  titleCenter: {
    fontSize: 34,
    // fontSize: 50,
    textAlign: 'center',
    color: TITLE,
    fontFamily: BASE_FONT_REGULAR,
    paddingTop: 40,
    paddingBottom: 40,
  },
  greetingTitle: {
    fontSize: 88,
    textAlign: 'center',
    color: WHITE,
    fontFamily: 'GrandHotel-Regular',
  },
  sessionMessage: {
    fontSize: 21,
    marginBottom: 2,
    textAlign: 'center',
    color: GREETING_TEXT,
    fontFamily: BASE_FONT_REGULAR,
    // textShadowColor: BLUE,
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 4,
    // shadowOpacity: 0.98,
  },
  greetingButton: {
    color: ORANGE,
    fontFamily: BASE_FONT_BOLD,
    fontSize: 20,
    width: 200,
    textAlign: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
  },
  sessionButton: {
    color: WHITE,
    fontFamily: BASE_FONT_BOLD,
    fontSize: 20,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  posButton: {
    color: WHITE,
    fontFamily: BASE_FONT_BOLD,
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
  },
  negButton: {
    color: BLUE,
    fontFamily: BASE_FONT_BOLD,
    fontSize: 18,
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
    alignSelf: 'stretch',
    textAlign: 'center',
  }
});

export const pantryText = StyleSheet.create({
  item: {
    fontSize: 22,
    color: WHITE,
    paddingLeft: 16,
  },
  itemDesc: {
    fontSize: 18,
    paddingLeft: 28,
    color: ORANGE_LIGHTER,
  },
  updateItem: {
    color: WHITE,
    fontFamily: BASE_FONT_BOLD,
    fontSize: 40,
  },
  updateQuan: {
    fontSize: 30,
    color: WHITE,
    fontFamily: BASE_FONT_BOLD,
    width: 100,
    textAlign: 'right',
  },
  updateQuanUnit: {
    fontSize: 30,
    color: WHITE,
    fontFamily: BASE_FONT_REGULAR,
    width: 100,
    textAlign: 'left',
    paddingLeft: 3,
  },
});

