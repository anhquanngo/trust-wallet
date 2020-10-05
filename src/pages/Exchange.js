import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ExchangeContainer from '../components/ExchangeContainer';

const Stack = createStackNavigator();

import AsyncStorage from '@react-native-community/async-storage';


export const ExchangeScreen = () => {
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
