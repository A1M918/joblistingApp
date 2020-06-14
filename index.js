/**
 * @format
 */

import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {Provider} from 'react-redux';

import App from './App';
import {name as appName} from './app.json';

import store from './src/store/store';
import {setNavigator} from './src/NavigationService/NavigationService';

class AppRoot extends Component {
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
