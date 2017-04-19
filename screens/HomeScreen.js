import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import MapView from 'react-native-maps'

import haversine from 'haversine'
import pick from 'lodash/pick'

class HomeScreen extends Component {
    static navigatorStyle = {
        navBarHidden: true
    };

    constructor(props) {
        super(props);

        this.state = {
            coordinates: [
                { latitude: 60.1824861, longitude: 24.953714 }
            ],
            previousPos: {
                latitude: 60.1824861,
                longitude: 24.953714
            },
            distance: 0,
            navigating: false
        }

        this.onRegionChange = this.onRegionChange.bind(this);
        this.updateCoordinates = this.updateCoordinates.bind(this);
        this.startNavigation = this.startNavigation.bind(this);
    }

    componentDidMount() {
        this.locationWatchId = navigator.geolocation.watchPosition((position) => {
            let coordinates = position.coords;
            this.updateCoordinates(coordinates);
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.locationWatchId);
    }

    onRegionChange(coordinates) {
        this.updateCoordinates(coordinates);
    }

    updateCoordinates(coordinates) {
        let distance = +this.state.distance + haversine(this.state.previousPos, coordinates);

        this.setState({
            coordinates: this.state.coordinates.concat([
                {
                    latitude: coordinates.latitude,
                    longitude: coordinates.longitude
                }
            ]),
            previousPos: {
                latitude: coordinates.latitude,
                longitude: coordinates.longitude
            },
            distance
        })
    }

    startNavigation() {
        this.setState({ navigating: !this.state.navigating })
    }

    render() {
      return (
        <View
            style={ styles.container }
            >
            <MapView
              style={ styles.map }
              initialRegion={{
                latitude: 60.1824861,
                longitude: 24.953714,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
              onRegionChange= {this.onRegionChange }
            >
                <MapView.Polyline
                    key={1}
                    coordinates={this.state.coordinates}
                    strokeColor="#19B5FE"
                    fillColor="rgba(255,0,0,0.5)"
                    strokeWidth={8}
                />
            </MapView>
            { this.state.navigating &&
            <View style={styles.statusBar}>
                <Text style={styles.distance}>{this.state.distance.toFixed(1)}</Text>
                <Text style={styles.distanceUnit}>km</Text>
            </View>
        }
            <TouchableOpacity style={styles.buttonRedWrapper} onPress={this.startNavigation}>
                <View style={this.state.navigating ? styles.buttonRed : styles.buttonGreen} shadowColor={'#f02733'} shadowOffset={{width: 0, height: 10}} shadowOpacity={0.4} shadowRadius={20}>
                    <Text style={styles.buttonRedText}>{this.state.navigating ? 'STOP' : 'START'}</Text>
                </View>
            </TouchableOpacity>
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
    statusBar: {
        backgroundColor: '#02b875',
        width: '100%',
        height: 60,
        position: 'absolute',
        top: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    distance: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },
    distanceUnit: {
        color: '#fff',
    },
    buttonRed: {
       backgroundColor: '#f02733',
       borderRadius: 30,
       height: 60,
       justifyContent: 'center',
       alignItems: 'center',
       padding: 20,
       marginBottom: 10
    },
    buttonGreen: {
        backgroundColor: '#02b875',
        borderRadius: 30,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 10
    },
    buttonRedText: {
       color: '#fff',
       fontFamily: 'bebas-neue',
       fontSize: 24,
       fontWeight: 'bold'
    },
});

export default HomeScreen;
