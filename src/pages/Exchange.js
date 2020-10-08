import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ExchangeContainer from '../components/ExchangeContainer';

const Stack = createStackNavigator();

export const ExchangeScreen = () => {
  return (
    <Stack.Navigator initialRouteName="ExchangeContainer">
      <Stack.Screen
        name="ExchangeContainer"
        component={ExchangeContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
