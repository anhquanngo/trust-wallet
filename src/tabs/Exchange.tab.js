import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { HeaderExchange } from '../components/exchange';

import ExchangeContainer from './exchange';

const Stack = createStackNavigator();

export default function ExchangeTab() {
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
