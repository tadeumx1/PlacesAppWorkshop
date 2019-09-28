import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import Map from '../../components/Map'

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default class MapScreen extends Component {

  async requestLocationPermission() {
    try {

      

    } catch (err) {
        console.warn(err)
    }

  }

  async componentDidMount() {
    // let isGranted = await this.requestLocationPermission();
    /* if (!isGranted) {

      Alert.alert(
        'Mensagem',
        'Localização não habilitada, ative a localização e reinicie o aplicativo'
      )

    } */

  }

  render() {
    return (

      <View style={styles.container}>
        <Map navigation={this.props.navigation} /> 
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
}); 