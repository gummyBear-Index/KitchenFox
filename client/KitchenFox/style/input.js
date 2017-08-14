import { StyleSheet } from 'react-native';
import { BASE_FONT_REGULAR, WHITE, BLACK, BLUE, BLUE_DARK, ORANGE_LIGHTER } from './common';

export const input = StyleSheet.create({
  field: {
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
    width: 150,
  },
});

export const addItemsInput = StyleSheet.create({
  icon: {
    color: ORANGE_LIGHTER,
    fontSize: 30,
    paddingLeft: 15,
  },
  iconScanner: {
    color: WHITE,
    fontSize: 30,
    paddingLeft: 18,
    paddingRight: 15,
    paddingTop: 18,
    paddingBottom: 18,
  },
});
