import React from 'react';
import { View, StatusBar } from 'react-native';
import { bar } from '../../style/layout';
import { BLUE_DARK } from '../../style/common';

const CustomStatusBar = ({...props}) => (
  <View style={[bar.statusBar]}>
    <StatusBar translucent backgroundColor={BLUE_DARK} {...props} />
  </View>
);

export default CustomStatusBar;
