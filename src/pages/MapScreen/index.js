import React, { Component } from 'react';
import { View, StyleSheet, Alert } from 'react-native';

import Map from '../../components/Map'

import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';

export default class MapScreen extends Component {

  async requestLocationPermission() {
    try {

      let { status } = await Permissions.askAsync(Permissions.LOCATION);
      
      if(status === 'granted') {
        return true
      } else {
        return false
      }

    } catch (err) {
        console.warn(err)
    }

  }

  async componentDidMount() {
    let isGranted = await this.requestLocationPermission();
    if (!isGranted) {

      Alert.alert(
        'Mensagem',
        'Localização não habilitada, ative a localização e reinicie o aplicativo'
      )

    }

    const { locationServicesEnabled, gpsAvailable } = await Location.getProviderStatusAsync()

    if (locationServicesEnabled != true || gpsAvailable != true) {
      Alert.alert(
        'Mensagem',
        'Habilite o GPS e Localização do seu dispositivo'
      )
    }

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