import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SliderShow, Login, Signup} from '../components';

import {Authencation, ConfirmAuth } from '../containers';

const Stack = createStackNavigator();

export const Private = () => {
  return (
    <React.Fragment>
        <Stack.Navigator initialRouteName="Wellcome">
          <Stack.Screen name="Wellcome" component={SliderShow}options={{headerShown: false}}/>
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="Signup" component={Signup} options={{headerShown: false}}/>
          <Stack.Screen name="Authencation" component={Authencation} options={{headerShown: false}}/>
          <Stack.Screen name="ConfirmAuth" component={ConfirmAuth} options={{headerShown: false}}/>
        </Stack.Navigator>
    </React.Fragment>
  );
}
