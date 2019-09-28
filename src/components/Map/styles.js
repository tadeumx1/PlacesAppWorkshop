import styled from 'styled-components/native';
import MapView from "react-native-maps";

export const Container = styled.View`
    display: flex;
    flex: 1;
`;

export const MapViewPlaces = styled(MapView)`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
`;