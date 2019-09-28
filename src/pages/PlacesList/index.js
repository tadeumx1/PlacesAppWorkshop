import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PlaceItem from '../../components/PlaceItem';
import api from '../../services/api'

export default function PlacesScreen() {

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState([]);

  useEffect(() => {
    async function loadPlaces() {

    }

    loadPlaces();
  }, []);

  return (
    <View style={styles.container}>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
