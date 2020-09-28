import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Ionicon from 'react-native-vector-icons/Ionicons';

import {
  ScreenOne,
  ScreenTwo,
  ScreenThree,
  ScreenFour
} from './screens';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#3375bb" barStyle="light-content"/>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={screenOptions}
          tabBarOptions={tabBarOptions}
        >
          <Tab.Screen name="ScreenOne" component={ScreenOne} />
          <Tab.Screen name="ScreenTwo" component={ScreenTwo} />
          <Tab.Screen name="ScreenThree" component={ScreenThree} />
          <Tab.Screen name="ScreenFour" component={ScreenFour} />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, size, color }) => {
    if (route.name == 'ScreenOne') return <Ionicon
      name={focused ? 'wallet' : 'wallet-outline'}
      size={size}
      color={color}
    />
    if (route.name == 'ScreenTwo') return <Ionicon
      name={focused ? 'grid' : 'grid-outline'}
      size={size}
      color={color}
    />
    if (route.name == 'ScreenThree') return <Ionicon
      name={focused ? 'cash' : 'cash-outline'}
      size={size}
      color={color}
    />
    if (route.name == 'ScreenFour') return <Ionicon
      name={focused ? 'settings' : 'settings-outline'}
      size={size}
      color={color}
    />
  },

});

const tabBarOptions = {
  activeTintColor: '#3375bb',
  inactiveTintColor: '#68788d',
  showLabel: false
};