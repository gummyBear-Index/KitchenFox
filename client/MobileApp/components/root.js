import React, { Component } from 'react';
// import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';

// import thunk from 'redux-thunk';
import App from './app';
// import configureStore from '../store/store';


class Root extends Component {
  constructor(props){
    super(props);
  }

 render(){
    return (
        <App />
    );
  }
}

export default Root;
      // <Provider store={this.props.store}>
      // <Provider>
      // </Provider>
