import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';

import Ionicon from 'react-native-vector-icons/Ionicons';

import {
  WalletScreen,
  MenuScreen,
  ExchangeScreen,
  SettingScreen
} from '../pages';

const Tab = createBottomTabNavigator();

export const Public = ({theme}) => {
  return (
    <React.Fragment>
      <Tab.Navigator
        screenOptions={screenOptions}
        tabBarOptions={{
          showLabel: false,
          style: {
            backgroundColor: theme.BACKGROUND_COLOR_SECONDARY,
            borderTopColor: "transparent",
          }
        }}>
        <Tab.Screen name="WalletScreen" component={WalletScreen} />
        <Tab.Screen name="MenuScreen" component={MenuScreen} />
        <Tab.Screen name="ExchangeScreen" component={ExchangeScreen} />
        <Tab.Screen name="SettingScreen" component={SettingScreen} />
      </Tab.Navigator>
    </React.Fragment>
  );
};

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, size, color }) => {
    if (route.name == 'WalletScreen')
      return (
        <IconStyle
          name={focused ? 'shield' : 'shield-outline'}
          size={size}
          focused={focused}
        />
      );
    if (route.name == 'MenuScreen')
      return (
        <IconStyle
          name={focused ? 'grid' : 'grid-outline'}
          size={size}
          focused={focused}
        />
      );
    if (route.name == 'ExchangeScreen')
      return (
        <IconStyle
          name={focused ? 'swap-horizontal' : 'swap-horizontal-outline'}
          size={size}
          focused={focused}
        />
      );
    if (route.name == 'SettingScreen')
      return (
        <IconStyle
          name={focused ? 'settings' : 'settings-outline'}
          size={size}
          focused={focused}
        />
      );
  },
});

const IconStyle = styled(Ionicon)`
  color: ${props => props.focused ? (props.theme.TEXT_COLOR_PRIMARY) : (
    props.theme.TEXT_COLOR_SECONDARY
  )}
`;


