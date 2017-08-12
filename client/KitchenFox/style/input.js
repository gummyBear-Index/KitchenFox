import { StyleSheet } from 'react-native';
import { BASE_FONT_REGULAR, WHITE, BLACK } from './common';

export const input = StyleSheet.create({
  field: {
    // marginBottom: 20,
    // backgroundColor: 'rgba(255,255,255,.76)',
    borderBottomWidth: 1,
    // borderRadius: 50,
    paddingLeft: 10,
    // borderColor: 'rgba(0,0,0,.38)', 
    borderWidth: 0,
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
