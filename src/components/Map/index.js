import React, { Component } from "react";

import MapView from "react-native-maps";

import api from "../../services/api";

import { Container, MapViewPlaces } from './styles'

const LATITUDE = 29.95539;
const LONGITUDE = 78.07513;
const LATITUDE_DELTA = 0.009;
const LONGITUDE_DELTA = 0.009;

export default class Map extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    latitude: LATITUDE,
    longitude: LONGITUDE,
    markers: []
  };

  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA
  });

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      error => alert(JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 2000, maximumAge: 1000 }
    );

    this.handleGetMarkers();
  }

  handleGetMarkers = async () => {
    const response = await api.get("/data");

    this.setState({ markers: response.data });
  };

  handleMarkerButton = async (marker) => {
    console.log(marker)
    this.props.navigation.navigate('AddEditMarker', { 
      markerId: marker.id
     })
  };

  renderMarkersMap = () => {
    return this.state.markers.map(marker => (
      <MapView.Marker
        key={marker.id}
        coordinate={{
          latitude: parseFloat(marker.latitude),
          longitude: parseFloat(marker.longitude)
        }}
        title={marker.company.name}
      >
        <MapView.Callout onPress={() => this.handleMarkerButton(marker)} />
      </MapView.Marker>
    ));
  };

  render() {
    return (
      <Container>
        <MapViewPlaces
          showUserLocation={true}
          followUserLocation
          loadingEnabled
          showsCompass={true}
          ref={el => (this.mapView = el)}
          // onPress={e => this.handlePressMap(e)}
          region={this.getMapRegion()}
        >
          {this.renderMarkersMap()}

        </MapViewPlaces>
      </Container>
    );
  }
}
