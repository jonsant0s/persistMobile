import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import RegisterScreen from '../screens/RegisterScreen';
import Home from '../screens/Home';

const Navigator = createStackNavigator(
  {
    Intro: {
      screen: Intro,
    },
    Login: {
      screen: Login,
    },
    RegisterScreen: {
      screen: RegisterScreen,
    },
    Home: {
      screen: Home,
    },

});

export default createAppContainer(Navigator);
