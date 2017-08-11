import { StyleSheet } from 'react-native';
import { COLOR_PRIMARY } from './common';

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
    marginTop: 80,
    paddingBottom: 20,
    textAlign: 'center',
    color: '#fff',
  },
  sessionMessage: {
    fontSize: 20,
    marginTop: 5,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
  }
});
