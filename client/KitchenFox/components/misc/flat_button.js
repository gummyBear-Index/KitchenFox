import React, { Component } from 'react';
import { Button } from 'native-base';

class FButton extends React.Component<any, any> {
  get extendStyle() {
    const {flat} = this.props;
    let style = {};
    if(flat) {
      style = Object.assign({
        shadowColor: 'transparent',
        shadowOpacity: 0,
      }, style);
    }
    return style;
  }

  render() {
    return <Button {...this.props} style={[this.props.style||{}, this.extendStyle]} />
  }
}

export default FButton;
