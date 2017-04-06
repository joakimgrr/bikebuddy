import { Navigation } from 'react-native-navigation';

import HomeScreen from './HomeScreen';
import TripsScreen from './TripsScreen';

export function registerScreens() {
    Navigation.registerComponent('bikebuddy.HomeScreen', () => HomeScreen);
    Navigation.registerComponent('bikebuddy.TripsScreen', () => TripsScreen);
}
