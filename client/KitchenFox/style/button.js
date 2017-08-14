import { StyleSheet } from 'react-native';
import { BUTTON_ACTION, BUTTON_ACTION_TEXT, WHITE, ORANGE, BLUE } from './common';

export const button = StyleSheet.create({
  // container: {
  //   borderRadius: 5,
  // },
  button: {
    backgroundColor: BUTTON_ACTION,
    color: BUTTON_ACTION_TEXT,
    borderRadius: 5,
    padding: 15,
    shadowColor: 'transparent',
    shadowOpacity: 0,
  },
  greetingButton: {
    borderRadius: 80,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: WHITE,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    // borderWidth: 1,
    borderColor: '#fff'
  },
  sessionButton: {
    borderRadius: 80,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: ORANGE,
    shadowColor: 'transparent',
    shadowOpacity: 0,
    // borderWidth: 1,
    borderColor: '#fff',
    width: 200,
    // alignSelf: 'stretch',
    // textAlign: 'center',
  },
  negFormButton: {
    borderRadius: 80,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: BLUE,
    width: 120,
  },
  posFormButton: {
    borderRadius: 80,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: BLUE,
    borderWidth: 3,
    borderColor: BLUE,
    maxWidth: 140,
  },
  negFormButtonRecipe: {
    borderRadius: 80,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: 'transparent',
    borderWidth: 3,
    borderColor: BLUE,
    // alignItems: 'stretch',
    width: 180,
  },
  posFormButtonRecipe: {
    borderRadius: 80,
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: BLUE,
    borderWidth: 3,
    borderColor: BLUE,
    // alignItems: 'stretch',
    width: 180,
  },
});

