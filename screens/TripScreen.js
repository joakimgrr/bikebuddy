import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

class TripScreen extends Component {
    constructor(props) {
        super(props);

        this.startNavigation = this.startNavigation.bind(this);
    }

    startNavigation() {

    }

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.wrapper}>
                    <View style={styles.block}>
                        <Text style={styles.hugeText}>00:00:00</Text>
                        <Text style={styles.mediumText}>Elapsed time</Text>
                    </View>
                    <View style={styles.block}>
                        <View style={styles.textBlock}>
                            <Text style={styles.hugeText}>40,8</Text>
                            <Text style={[styles.mediumText, styles.distanceUnit]}>km</Text>
                        </View>
                        <Text style={styles.mediumText}>Distance</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.startButton} onPress={this.startNavigation}>
                    <View shadowColor={'#f02733'} shadowOffset={{width: 0, height: 10}} shadowOpacity={0.4} shadowRadius={20}>
                        <Text style={styles.buttonText}>Start navigation</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        flexDirection: 'column'
    },
    block: {
        alignItems: 'center',
        width: '80%',
        paddingBottom: 20,
        paddingTop: 20
    },
    placeholderBlock: {
        flexGrow: 1
    },
    textBlock: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    hugeText: {
        fontSize: 65,
        fontWeight: 'bold'
    },
    mediumText: {
        fontSize: 20
    },
    startButton: {
        alignSelf: 'center',
        backgroundColor: '#02b875',
        borderRadius: 5,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginBottom: 10,
        marginBottom: 20
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 24
    },
    wrapper: {
        flexGrow: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    distanceUnit: {
        paddingBottom: 15,
        paddingLeft: 5
    }
});

export default TripScreen;
