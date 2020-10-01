import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicon from 'react-native-vector-icons/Ionicons';

import { WalletTab, MenuTab, ExchangeTab, SettingsTab } from './tabs';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#3375bb" barStyle="light-content" />
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptions}
          tabBarOptions={tabBarOptions}>
          <Tab.Screen name="WalletTab" component={WalletTab} />
          <Tab.Screen name="MenuTab" component={MenuTab} />
          <Tab.Screen name="ExchangeTab" component={ExchangeTab} />
          <Tab.Screen name="SettingsTab" component={SettingsTab} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, size, color }) => {
    if (route.name == 'WalletTab')
      return (
        <Ionicon
          name={focused ? 'shield' : 'shield-outline'}
          size={size}
          color={color}
        />
      );
    if (route.name == 'MenuTab')
      return (
        <Ionicon
          name={focused ? 'grid' : 'grid-outline'}
          size={size}
          color={color}
        />
      );
    if (route.name == 'ExchangeTab')
      return (
        <Ionicon
          name={focused ? 'swap-horizontal' : 'swap-horizontal-outline'}
          size={size}
          color={color}
        />
      );
    if (route.name == 'SettingsTab')
      return (
        <Ionicon
          name={focused ? 'settings' : 'settings-outline'}
          size={size}
          color={color}
        />
      );
  },
});

const tabBarOptions = {
  activeTintColor: '#3375bb',
  inactiveTintColor: '#68788d',
  showLabel: false,
};