import React, {Component} from 'react';
import {View, StyleSheet, ActivityIndicator, AsyncStorage} from 'react-native';

class LoadingScreen extends Component {
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
