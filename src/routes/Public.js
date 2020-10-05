import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Ionicon from 'react-native-vector-icons/Ionicons';

import {
  WalletScreen,
  MenuScreen,
  ExchangeScreen,
  SettingScreen
} from '../pages';

const Tab = createBottomTabNavigator();

export const Public = () => {
  return (
    <React.Fragment>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={tabBarOptions}>
        <Tab.Screen name="WalletScreen" component={WalletScreen} />
        <Tab.Screen name="MenuScreen" component={MenuScreen} />
        <Tab.Screen name="ExchangeScreen" component={ExchangeScreen} />
        <Tab.Screen name="SettingScreen" component={SettingScreen} />
      </Tab.Navigator>
    </React.Fragment>
  );
};

const screenOptions = ({route}) => ({
  tabBarIcon: ({focused, size, color}) => {
    if (route.name == 'WalletScreen')
      return (
        <Ionicon
          name={focused ? 'shield' : 'shield-outline'}
          size={size}
          color={color}
        />
      );
    if (route.name == 'MenuScreen')
      return (
        <Ionicon
          name={focused ? 'grid' : 'grid-outline'}
          size={size}
          color={color}
        />
      );
    if (route.name == 'ExchangeScreen')
      return (
        <Ionicon
          name={focused ? 'swap-horizontal' : 'swap-horizontal-outline'}
          size={size}
          color={color}
        />
      );
    if (route.name == 'SettingScreen')
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
