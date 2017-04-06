/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
registerScreens(); // this is where you register all of your app's screens

class react_native_navigation_bootstrap extends Component {}

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'Home',
      screen: 'bikebuddy.HomeScreen',
      icon: require('./img/ic_home.png'),
      //selectedIcon: require('../img/one_selected.png'), // iOS only
      title: 'Home'
      },
      {
        label: 'Trips',
        screen: 'bikebuddy.TripsScreen',
        icon: require('./img/ic_home.png'),
        //selectedIcon: require('../img/one_selected.png'), // iOS only
        title: 'Trips'
      }
  ]
});
