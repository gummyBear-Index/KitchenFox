import { StyleSheet } from 'react-native';
import { BASE_FONT_LIGHT, BASE_FONT_REGULAR, BASE_FONT_BOLD, BUTTON_ACTION_TEXT, TITLE, BLUE, WHITE, ORANGE, GREETING_TEXT } from './common';

const title = {
  fontSize: 30,
  paddingTop: 20,
  paddingBottom: 20,
};

export const text = StyleSheet.create({
  title,
  titleLeft: {
    fontSize: 50,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    textAlign: 'left',
    color: TITLE,
    fontFamily: BASE_FONT_LIGHT,
  },
  titleSession: {
    fontSize: 50,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    textAlign: 'left',
    color: TITLE,
    fontFamily: BASE_FONT_LIGHT,
  },
  titleCenter: {
    fontSize: 94,
    textAlign: 'center',
    color: TITLE,
    fontFamily: BASE_FONT_LIGHT,
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
    fontWeight: 'normal',
    fontFamily: BASE_FONT_REGULAR,
    textShadowColor: BLUE,
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
    shadowOpacity: 0.98,
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
    width: 200,
    textAlign: 'center',
    paddingTop: 12,
    paddingBottom: 12,
    borderRadius: 10,
  },
});
