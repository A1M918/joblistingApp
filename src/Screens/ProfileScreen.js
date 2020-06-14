import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage,
  ActivityIndicator,
} from 'react-native';
import {Card, Button} from 'react-native-elements';
import * as NavigationService from '../NavigationService/NavigationService';

class ProfileScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.loadUserData();
  }

  loadUserData = async () => {
    const user = await AsyncStorage.getItem('user');
    this.setState({user: JSON.parse(user)});
  };

  logout = () => {
    AsyncStorage.removeItem('user');
    AsyncStorage.removeItem('access_token');
    NavigationService.navigateToLogin();
  };

  render() {
    const {container, textGeneralPadding, logoutButton} = style;
    const {user} = this.state;
    return user ? (
      <View style={container}>
        <Card title={user.name}>
          <Text style={textGeneralPadding}>Email: {user.email}</Text>
          <Text style={textGeneralPadding}>Phone: {user.phone}</Text>
        </Card>

        <Button
          title="Logout"
          buttonStyle={logoutButton}
          onPress={() => this.logout()}
        />
      </View>
    ) : (
      <ActivityIndicator />
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoutButton: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '5%',
  },
  textGeneralPadding: {paddingVertical: 5},
  detailsText: {
    borderTopWidth: 1,
    marginTop: 10,
    paddingTop: 10,
  },
});

export default ProfileScreen;
