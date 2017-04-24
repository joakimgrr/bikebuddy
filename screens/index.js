import { Navigation } from 'react-native-navigation';

import MapScreen from './MapScreen';
import TripsScreen from './TripsScreen';
import TripScreen from './TripScreen';

export function registerScreens() {
    Navigation.registerComponent('bikebuddy.TripScreen', () => TripScreen);
    Navigation.registerComponent('bikebuddy.MapScreen', () => MapScreen);
    Navigation.registerComponent('bikebuddy.TripsScreen', () => TripsScreen);
}
