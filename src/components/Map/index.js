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

  componentDidMount() {

  }

  render() {
    return (
      <Container>
       
      </Container>
    );
  }
}
