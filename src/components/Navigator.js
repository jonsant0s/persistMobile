import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import EmailInput from '../screens/EmailInput';
import PasswordInput from '../screens/PasswordInput';
import Home from '../screens/Home';

const Navigator = createStackNavigator(
  {
    Intro: {
      screen: Intro,
    },
    Login: {
      screen: Login,
    },
    EmailInput: {
      screen: EmailInput,
    },
    Password: {
      screen: PasswordInput,
    },
    Home: {
      screen: Home,
    },

});

export default createAppContainer(Navigator);
