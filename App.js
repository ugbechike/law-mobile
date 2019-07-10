
import React, { Component } from 'react';
// import {Platform, StyleSheet, Text, View} from 'react-native';
import Navigator from '../lawyerpp_mobile/src/appContainer/appContainer';
// import {View, Text} from 'react-native';
// import { Drawer } from 'native-base';
// import SideBar from './yourPathToSideBar';
import ConfigureStore from './src/store/configureStore/configureStore';
import { Provider } from 'react-redux';
var store = ConfigureStore();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Navigator />
      </Provider>
    )
  }
}
