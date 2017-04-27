import React, { Component } from 'react'
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native'

import MapView from 'react-native-maps'

import { connect } from 'react-redux'
import haversine from 'haversine'
import pick from 'lodash/pick'

import { updateDistance } from '../actions'

class MapScreen extends Component {

    constructor(props) {
        super(props);

        this.state = {
            coordinates: [
                // { latitude: 60.1824861, longitude: 24.953714 }
            ],
            previousPos: {
                // latitude: 60.1824861,
                // longitude: 24.953714
            },
            distance: 0,
            navigating: false
        }

        this.updateCoordinates = this.updateCoordinates.bind(this);
    }

    componentDidMount() {
        let options = {
            enableHighAccuracy: true,
            timeout: 5000
        }

        navigator.geolocation.getCurrentPosition((pos) => {
            let coords = pos.coords;
            this.setState({ initialPosition: {
                latitude: coords.latitude,
                longitude: coords.longitude,
                latitudeDelta: 0.0822,
                longitudeDelta: 0.0321
            } })
        },
        (err) => {
            alert('erro', err)
        }, options);

        this.locationWatchId = navigator.geolocation.watchPosition((position) => {
            let coordinates = position.coords;
            this.updateCoordinates(coordinates);
        })
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.locationWatchId);
    }

    updateCoordinates(coordinates) {
        let distance = (+this.state.distance + (haversine(this.state.previousPos, coordinates) || 0)).toFixed(2);

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

        this.props.dispatch(updateDistance(distance))
    }

    render() {
      return (
        <View
            style={ styles.container }
            >
            <MapView
              style={ styles.map }
              initialRegion={ this.state.initialPosition }
              showsUserLocation={true}
              onRegionChange={this.updateCoordinates }
            >
                <MapView.Polyline
                    key={1}
                    coordinates={this.state.coordinates}
                    strokeColor="#19B5FE"
                    fillColor="rgba(255,0,0,0.5)"
                    strokeWidth={8}
                />
            </MapView>
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

export default connect()(MapScreen);
