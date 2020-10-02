import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { HeaderExchange } from '../components/exchange';

import ExchangeContainer from './exchange';

const Stack = createStackNavigator();

import AsyncStorage from '@react-native-community/async-storage';


export default function ExchangeTab() {
  React.useEffect(() => {
    async function getItem() {
      let data = await AsyncStorage.getItem('user');
      console.log(JSON.parse(data));
    }

    getItem();
  })
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
