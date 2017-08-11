import React, { Component } from 'react';
import { StackNavigator, Alert, StyleSheet } from 'react-native';
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

// let styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor: "transparent",
//   }
// });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});

class BarCodeCamera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCamera: true,
      cameraType: Camera.constants.Type.back
    };
  }

  // static navigationOptions = {
  //   title: 'Scan the Item',
  // };
  // <View>
  //   <Text>
  //     Scan the barcode now!
  //   </Text>
  //   <Camera
  //   ref={(cam) => {
  //     this.camera = cam;
  //   }}
  //   style={styles.container}
  //   aspect={Camera.constants.Aspect.fill}
  //   onBarCodeRead={this._onBarCodeRead}
  //   barCodeTypes={["upce"]}
  //   type={this.state.cameraType}>
  //   </Camera>
  // </View>

  render() {
    // if (this.state.showCamera) {
        return (
          <View style={styles.container}>
            <Camera
              ref={(cam) => {
                this.camera = cam;
              }}
              style={styles.preview}
              aspect={Camera.constants.Aspect.fill}>
              <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
            </Camera>
          </View>


        );
    // } else {
    //     return (
    //       <View>
    //         <Text>
    //           here
    //         </Text>
    //       </View>
    //     );
    // }
  }

  takePicture() {
  const options = {};
  //options.location = ...
  this.camera.capture({metadata: options})
    .then((data) => console.log(data))
    .catch(err => console.error(err));
  }

  _onBarCodeRead(e) {
    this.setState({showCamera: false});
    Alert.alert(
        "Barcode Found!",
        "Type: " + e.type + "\nData: " + e.data
    );
  }

}

export default BarCodeCamera;
