/**
 * @format
 */

import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import {AsyncStorage} from 'react-native';

import App from './App';
import { name as appName } from './app.json';

import store from './src/store/store';
import {
  setNavigator,
  navigate,
} from './src/NavigationService/NavigationService';

class AppRoot extends Component {
  constructor() {
    super();
    this.loadApp();
  }
  loadApp = async () => {
    const userToken = await AsyncStorage.getItem('access_token');
    if (userToken) {
      navigate('User');
    } else {
      navigate('Auth');
    }
  };
  componentDidMount() {
    setNavigator(this.navigator);
  }
  render() {
    return (
      <Provider store={store}>
        <App
          ref={(nav) => {
            this.navigator = nav;
          }}
        />
      </Provider>
    );
  }
}

AppRegistry.registerComponent(appName, () => AppRoot);
