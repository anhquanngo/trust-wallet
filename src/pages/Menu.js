import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import MenuContainer from '../components/MenuContainer';

const Stack = createStackNavigator();

export const MenuScreen = () => {
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
