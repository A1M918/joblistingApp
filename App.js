/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LoginScreen from './src/Screens/LoginScreen';
import SignUpScreen from './src/Screens/SignupScreen';
import HomeScreen from './src/Screens/HomeScreen';
import CreateJobScreen from './src/Screens/CreateJobScreen';
import ProfileScreen from './src/Screens/ProfileScreen';
import {TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import * as NavigationService from './src/NavigationService/NavigationService';

const ProfileButton = () => (
  <TouchableOpacity onPress={() => NavigationService.navigate('Profile')}>
    <Icon name="person" size={30} style={{marginRight: 15}} />
  </TouchableOpacity>
);

const staticNavOptions = () => {
  return {
    navigationOptions: ({navigation}) => ({
      // title: `${navigation.state.params.title}`,
      title: 'Home',
      // headerTitleStyle: styles.headerTitle,
      // headerStyle: styles.header,
      // headerTransparent: false,
      // headerLeft: headerLeft(Images.blackLeftArrow, () => pop()),
      headerRight: ProfileButton(),
      //headerStyle,
    }),
  };
};

const userStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    ...staticNavOptions(),
  },
  Profile: ProfileScreen,
  CreateJob: CreateJobScreen,
});

const authNavigator = createStackNavigator({
  Login: LoginScreen,
  SignUp: SignUpScreen,
});

const navigator = createSwitchNavigator({
  Auth: authNavigator,
  User: userStack,
});

export default createAppContainer(navigator);
