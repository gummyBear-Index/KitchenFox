import { StyleSheet } from 'react-native';
import { BLACK, BUTTON_ACTION_TEXT, TITLE } from './common';

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
    color: BLACK,
    fontFamily: 'Quicksand-Light',
  },
  titleCenter: {
    // fontSize: 62,
    // paddingTop: 20,
    // paddingBottom: 20,
    // textAlign: 'center',
    // color: '#fff',
    // fontWeight: 'bold',
    // fontFamily: 'Quicksand-Light',
    // textShadowColor: '#444',
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 20,
    fontSize: 94,
    textAlign: 'center',
    color: TITLE,
    // textShadowColor: '#444',
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 20,
    fontFamily: 'Quicksand-Light',
  },
  sessionTitle: {
    fontSize: 88,
    textAlign: 'center',
    color: TITLE,
    // textShadowColor: '#444',
    // textShadowOffset: { width: 1, height: 1 },
    // textShadowRadius: 20,
    fontFamily: 'GrandHotel-Regular',
  },
  sessionMessage: {
    fontSize: 21,
    marginBottom: 2,
    textAlign: 'center',
    color: '#444',
    fontWeight: 'normal',
    fontFamily: 'Quicksand-Regular',
    // textShadowColor: '#000',
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 8,
    // shadowOpacity: 0.7,
  },
  sessionButton: {
    color: BUTTON_ACTION_TEXT,
    fontFamily: 'Quicksand-Regular',
    fontWeight: 'bold',
    fontSize: 20,
    width: 200,
    textAlign: 'center',
  }
});
