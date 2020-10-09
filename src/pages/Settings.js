import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux'

import { SettingSecurity, SettingAbout, SettingInviteFriend, SettingNotifications, SettingPreferences, PreferencesCurrency, SettingWallet, SettingList } from '../components/SettingContainer';

const Stack = createStackNavigator();

export const SettingScreen = () => {
  const theme = useSelector(state => state.theme)
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
              backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
            }, headerTintColor: theme.TEXT_COLOR_PRIMARY,
          }}
        />
        <Stack.Screen
          name="Setting-InviteFriend"
          component={SettingInviteFriend}
          options={{
            headerStyle: {
              backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
            }, headerTintColor: theme.TEXT_COLOR_PRIMARY,
          }}
        />
        <Stack.Screen
          name="Setting-Notifications"
          component={SettingNotifications}
          options={{
            headerStyle: {
              backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
            }, headerTintColor: theme.TEXT_COLOR_PRIMARY,
          }}
        />
        <Stack.Screen
          name="Setting-Preferences"
          component={SettingPreferences}
          options={{
            headerStyle: {
              backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
            }, headerTintColor: theme.TEXT_COLOR_PRIMARY,
          }}
        />
        <Stack.Screen
          name="Preferences-Currency"
          component={PreferencesCurrency}
          options={{
            headerStyle: {
              backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
            }, headerTintColor: theme.TEXT_COLOR_PRIMARY,
          }}
        />
        <Stack.Screen
          name="Setting-Wallet"
          component={SettingWallet}
          options={{
            headerStyle: {
              backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
            }, headerTintColor: theme.TEXT_COLOR_PRIMARY,
          }}
        />
        <Stack.Screen
          name="Setting-Security"
          component={SettingSecurity}
          options={{
            headerStyle: {
              backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
            }, headerTintColor: theme.TEXT_COLOR_PRIMARY,
          }}
        />
        <Stack.Screen
          name="About"
          component={SettingAbout}
          options={{
            headerStyle: {
              backgroundColor: theme.BACKGROUND_COLOR_PRIMARY,
            }, headerTintColor: theme.TEXT_COLOR_PRIMARY,
          }}
        />
      </Stack.Navigator>
    </React.Fragment >
  );
}


