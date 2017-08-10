import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './app_container';

class Root extends Component {
  constructor(props) {
    super(props);
    // console.warn(JSON.stringify(this.props.store));
  }

  render() {
    return (
      <Provider store={this.props.store}>
        <AppContainer />
      </Provider>
    );
  }
}

export default Root;
