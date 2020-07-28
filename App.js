import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import LoadingScreen from './src/screens/LoadingScreen';

import LoginScreen from './src/screens/LoginScreen';
import RegisterScreen from './src/screens/RegisterScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';

import HomeScreen from './src/screens/HomeScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import AddHabitScreen from './src/screens/AddHabitScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions : {
        title: 'Home',
      }
    },
    AddHabit: {
      screen: AddHabitScreen,
      navigationOptions : {
        title: 'New Habit',
      }
    },
  }
);


const AppTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon : ({ tintColor }) => <Ionicons name="ios-home" size={24} color={tintColor}/>
      }
    },
    //AddHabit: {
    //  screen: AddHabitScreen,
    //  navigationOptions: {
    //    tabBarIcon: ({ tintColor }) => (<Ionicons
      //    name="ios-add-circle"
    //      size={24}
    //      color={tintColor}

    //      />
    //    )
  //    }
  //  },
    Settings: {
      screen: SettingsScreen,
      navigationOptions: {
        tabBarIcon : ({ tintColor }) => <Ionicons name="cog-outline" size={24} color={tintColor}/>
      }
    }
});

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    RegisterScreen: {
      screen: RegisterScreen,
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
    },

  });

export default createAppContainer(
  createSwitchNavigator(
    {
      Loading: LoadingScreen,
      App: AppTabNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "Loading"
    }
  )
);
