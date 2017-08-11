import { StyleSheet } from 'react-native';
import { BUTTON_ACTION } from './common';

export const button = StyleSheet.create({
  // container: {
  //   borderRadius: 5,
  // },
  button: {
    backgroundColor: BUTTON_ACTION,
    color: '#fff',
    borderRadius: 5,
    padding: 15,
  },
  sessionButton: {
    borderRadius: 4,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: BUTTON_ACTION,
  }
});

