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
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    textAlign: 'left',
    color: COLOR_PRIMARY,
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
    fontSize: 50,
    paddingBottom: 10,
    textAlign: 'center',
    color: '#fff',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 20,
  },
  sessionMessage: {
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 20,
  },
  sessionButton: {
    color: BUTTON_ACTION_TEXT,
  }
});
