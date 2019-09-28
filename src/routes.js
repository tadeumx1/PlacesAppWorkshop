import React from 'react';

import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';

import { Feather } from '@expo/vector-icons';

import MapScreen from './pages/MapScreen'
import AddEditMarker from './pages/AddEditMarker'
import PlacesList from './pages/PlacesList'

import Welcome from './pages/Welcome'
import AuthLoadingScreen from './pages/AuthLoadingScreen'

const TabNav = createBottomTabNavigator(
	{
		AddEditMarker: {
			screen: AddEditMarker,
			navigationOptions: {
				title: 'AddEditMarker'
			}
		},
		MapScreen: {
			screen: MapScreen,
			navigationOptions: {
				title: 'MapScreen'
			}
		},
		PlacesList: {
			screen: PlacesList,
			navigationOptions: {
				title: 'PlacesList'
			}
		},
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
				let iconName;

				switch (routeName) {
					case 'AddEditMarker':
						iconName = `search`;
						break;
					case 'MapScreen':
						iconName = `briefcase`;
						break;
					case 'PlacesList':
						iconName = `user`;
						break;
				}

				// You can return any component that you like here! We usually use an
				// icon component from react-native-vector-icons
				return <Feather name={iconName} size={24} color={tintColor} />;
			},
		}),
		initialRouteName: 'MapScreen',
		tabBarOptions: {
			activeTintColor: '#7A91CA',
			inactiveTintColor: '#ccc',
			style: {
				backgroundColor: '#FFFFFF',
				// height: metrics.tabBarHeight,
				paddingHorizontal: 20,
				borderColor: '#eee',
			}
		},
	}
);

const TabNavContainer = createAppContainer(TabNav);

const AuthStack = createStackNavigator(
	{
		SignIn: Welcome,
		App: TabNavContainer,
		// SignUp: RegisterUser
	},
	{
		initialRouteName: 'SignIn',
		headerMode: 'none',
		header: null
	}
);

const AuthStackContainer = createAppContainer(AuthStack);

const RootStack = createStackNavigator(
	{
		AuthLoading: { screen: AuthLoadingScreen },
		App: { screen: TabNavContainer },
		Auth: { screen: AuthStackContainer }
	},
	{
		initialRouteName: 'AuthLoading',
		headerMode: 'none',
		navigationOptions: {
			header: null
		}
	}
);

const RootStackContainer = createAppContainer(RootStack);

export default RootStackContainer
