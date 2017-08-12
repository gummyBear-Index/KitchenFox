import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY, BUTTON_ACTION_TEXT } from './common';

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
    color: COLOR_PRIMARY,
    fontFamily: 'Open Sans',
  },
  titleCenter: {
    fontSize: 40,
    paddingTop: 20,
    paddingBottom: 20,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  },
  sessionTitle: {
    fontSize: 94,
    textAlign: 'center',
    color: '#fff',
    // textShadowColor: '#000',
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 20,
    fontFamily: 'GrandHotel-Regular',
  },
  sessionMessage: {
    fontSize: 23,
    marginBottom: 2,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'normal',
    fontFamily: 'Open Sans',
    // textShadowColor: '#000',
    // textShadowOffset: { width: 2, height: 2 },
    // textShadowRadius: 8,
    // shadowOpacity: 0.7,
  },
  sessionButton: {
    color: BUTTON_ACTION_TEXT,
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 20,
    width: 200,
    textAlign: 'center',
  }
});
