import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import RegisterScreen from '../screens/RegisterScreen';
import Home from '../screens/Home';
import ForgotPassword from '../screens/ForgotPassword';

const AppStack = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
});

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
    },
    RegisterScreen: {
      screen: RegisterScreen,
    },
    ForgotPassword: {
      screen: ForgotPassword,
    },

  });

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: Intro,
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);
