import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SettingSecurity, SettingAbout, SettingWallet, SettingList } from '../components/SettingContainer';

const Stack = createStackNavigator();

export const SettingScreen = () => {
  return (
    <React.Fragment>
      <Stack.Navigator initialRouteName="SettingList"
        screenOptions={{
          headerTintColor: 'white',
        }}
      >
        <Stack.Screen
          name="SettingList"
          component={SettingList}
          options={{
            headerStyle: {
              backgroundColor: '#384267',
            },
          }}
        />
        <Stack.Screen
          name="Setting-Wallet"
          component={SettingWallet}
          options={{
            headerStyle: {
              backgroundColor: '#384267',
            },
          }}
        />
        <Stack.Screen
          name="Setting-Security"
          component={SettingSecurity}
          options={{
            headerStyle: {
              backgroundColor: '#384267',
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={SettingAbout}
          options={{
            headerStyle: {
              backgroundColor: '#384267',
            },
          }}
        />
      </Stack.Navigator>
    </React.Fragment >
  );
}


