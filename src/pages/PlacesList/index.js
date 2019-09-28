import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import PlaceItem from '../../components/PlaceItem';
import api from '../../services/api'

export default function PlacesScreen() {

  const [data, setData] = useState([]);
  const [refreshing, setRefreshing] = useState([]);

  useEffect(() => {
    async function loadPlaces() {

      const response = await api.get('/data')

      setData(response.data);
    }

    loadPlaces();
  }, []);

  renderListItem = ({ item }) => <PlaceItem repository={item} />

  return (
    <View style={styles.container}>

      <FlatList
        data={data}
        keyExtractor={item => String(item.id)}
        renderItem={renderListItem}
        // onRefresh={this.loadRepositories}
        // refreshing={this.state.refreshing}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
});
