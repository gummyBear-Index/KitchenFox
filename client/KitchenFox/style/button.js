import { StyleSheet } from 'react-native';
import { BUTTON_ACTION, BUTTON_ACTION_TEXT } from './common';

export const button = StyleSheet.create({
  // container: {
  //   borderRadius: 5,
  // },
  button: {
    backgroundColor: BUTTON_ACTION,
    color: BUTTON_ACTION_TEXT,
    borderRadius: 5,
    padding: 15,
  },
  sessionButton: {
    borderRadius: 20,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: BUTTON_ACTION,
  },
});

