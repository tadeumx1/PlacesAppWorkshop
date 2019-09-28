import React, { useState, useEffect } from 'react';
import { createStackNavigator, createAppContainer, StackActions, NavigationActions } from 'react-navigation';

import { View, Text, AsyncStorage, ActivityIndicator } from 'react-native';

export default function AuthLoadingScreen(props) {

  useEffect(() => {
    async function handleUserNextScreen() {

    const username = await AsyncStorage.getItem('@PlacesApp:username');

    if(username != null) {

        const resetAction = StackActions.reset ({

            index: 0,
            actions: [

              NavigationActions.navigate({ routeName: 'App' }),

            ]

        });

        props.navigation.dispatch(resetAction);

    } else {

        const resetAction = StackActions.reset ({

            index: 0,
            actions: [

                NavigationActions.navigate({ routeName: 'Auth' }),

            ]

        });
        
        props.navigation.dispatch(resetAction);

    }

    }

    handleUserNextScreen()

  }, [])

  // if(!userChecked) return null;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      
      <ActivityIndicator size="large" color="#00ff00" />

    </View>
  );

}

AuthLoadingScreen.navigationOptions = () => {
  return {
    header: null
  }
}
