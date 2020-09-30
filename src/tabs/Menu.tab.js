import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MenuContainer from './menu';

const Stack = createStackNavigator();

export default function MenuTab() {
  return (
    <Stack.Navigator initialRouteName="MenuContainer">
      <Stack.Screen
        name="MenuContainer"
        component={MenuContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
