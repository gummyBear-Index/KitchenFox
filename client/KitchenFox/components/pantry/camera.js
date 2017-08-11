import React, { Component } from 'react';
import { StackNavigator } from 'react-native';
import Camera from "react-native-camera";

import {
  Container,
  Header,
  Title,
  InputGroup,
  Input,
  Button,
  Spinner,
  Icon,
  View,
  Text,
  Navigator,
} from 'native-base';

let styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
  }
});

class Camera extends Component {
  constructor() {
    super()
    this.state ={
      showCamera: true,
      cameraType: Camera.constants.Type.back
    }
  };

  static navigationOptions = {
    title: 'Scan the Item',
  };

  render() {
    return (
      if(this.state.showCamera) {
          return (
              <View>
                <Camera
                ref={(cam) => {
                  this.camera = cam;
                }}
                style={styles.container}
                aspect={Camera.constants.Aspect.fill}
                onBarCodeRead={this._onBarCodeRead}
                barCodeTypes="upce"
                type={this.state.cameraType}>
                </Camera>
              </View>
          );
      } else {
          return (
              <View>
              </View>
          );
      }
    );
  };

  _onBarCodeRead(e) {
    this.setState({showCamera: false});
    AlertIOS.alert(
        "Barcode Found!",
        "Type: " + e.type + "\nData: " + e.data
    );
  }

});

export default Camera;
