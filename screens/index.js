import { Navigation } from 'react-native-navigation';

import MapScreen from './MapScreen';
import TripsScreen from './TripsScreen';
import TripScreen from './TripScreen';

export function registerScreens(store, Provider) {
    Navigation.registerComponent('bikebuddy.TripScreen', () => TripScreen, store, Provider);
    Navigation.registerComponent('bikebuddy.MapScreen', () => MapScreen, store, Provider);
    Navigation.registerComponent('bikebuddy.TripsScreen', () => TripsScreen, store, Provider);
}
