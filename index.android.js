/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createEpicMiddleware } from 'redux-observable';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { Navigation } from 'react-native-navigation';
import { registerScreens } from './screens';
import { rootReducer, rootEpic } from './reducers';

const epicMiddleware = createEpicMiddleware(rootEpic);

const store = createStore(
    rootReducer,
    applyMiddleware(epicMiddleware)
)

registerScreens(store, Provider); // this is where you register all of your app's screens

class react_native_navigation_bootstrap extends Component {}

Navigation.startTabBasedApp({
    tabs: [
        {
            label: 'Home',
            screen: 'bikebuddy.TripScreen',
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
        },
        {
            label: 'Map',
            screen: 'bikebuddy.MapScreen',
            icon: require('./img/ic_home.png'),
            //selectedIcon: require('../img/one_selected.png'), // iOS only
            title: 'Map'
        }
    ]
});
