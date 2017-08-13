import { StyleSheet } from 'react-native';
import { BASE_FONT_REGULAR, WHITE, BLACK } from './common';

export const input = StyleSheet.create({
  field: {
    // marginBottom: 20,
    // backgroundColor: 'rgba(255,255,255,.2)',
    borderWidth: 0,
    borderBottomWidth: 1,
    paddingLeft: 10,
    borderColor: 'rgba(0,0,0,.14)',
    paddingTop: 4, 
    paddingBottom: 4, 
  },
  sessionText: {
    color: BLACK,
    fontFamily: BASE_FONT_REGULAR,
  },
  icon: {
    color: '#444',
  },
  box: {
    marginBottom: 20,
    width:150,
  },
});
