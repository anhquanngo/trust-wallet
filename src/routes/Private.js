import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import { LoginForm, SignupForm } from '../containers';


const Stack = createStackNavigator();

export default function Private() {
  return <React.Fragment>
      <NavigationContainer>
          <Stack.Navigator initialRouteName="LoginForm">
              <Stack.Screen name="LoginForm" component={LoginForm} options={{headerShown: false}}/>
              <Stack.Screen name="SignupForm" component={SignupForm} options={{headerShown: true}}/>
          </Stack.Navigator>
      </NavigationContainer>
  </React.Fragment>;
}
