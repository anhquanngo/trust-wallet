import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {SliderShow, Login, Signup} from '../components';

import {Authencation, ConfirmAuth } from '../containers';

const Stack = createStackNavigator();

export default function Private() {
  return (
    <React.Fragment>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Wellcome">
          <Stack.Screen name="Wellcome" component={SliderShow} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Authencation" component={Authencation} />
          <Stack.Screen name="ConfirmAuth" component={ConfirmAuth} />
        </Stack.Navigator>
      </NavigationContainer>
    </React.Fragment>
  );
}
