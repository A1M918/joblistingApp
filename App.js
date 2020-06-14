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
// import ProfileScreen from './src/Screens/ProfileScreen';
import CreateJobScreen from './src/Screens/CreateJobScreen';

const userStack = createStackNavigator({
  Home: HomeScreen,
//   Profile: ProfileScreen,
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
