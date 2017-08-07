// import {
// 	AppRegistry,
// } from 'react-native';
import App from 'MobileApp/src/App';
//
// AppRegistry.registerComponent('MobileApp', () => App);
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
} from 'react-native';

import HomeView from './views/HomeView'

// class Client extends Component {
//   render() {
//     return (
//       <NavigatorIOS
//         style={styles.container}
//         initialRoute={{
//         title: 'JWT Auth Example',
//         component: HomeView,
//       }}/>
//     )
//   }
// }

class client extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

AppRegistry.registerComponent('MobileApp', () => App);
AppRegistry.registerComponent('client', () => client);
// module.exports = Client;
