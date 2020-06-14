import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator, AsyncStorage} from 'react-native';
import {navigate} from '../NavigationService/NavigationService';

class LoadingScreen extends Component {
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
  render() {
    return (
      <View style={styleSheet.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const styleSheet = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default LoadingScreen;
