import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <View style={styleSheet.container}>
        <Text>This is Home Screen</Text>
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

export default ProfileScreen;
