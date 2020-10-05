import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {
  SettingItem,
  SettingList,
  SettingAbout,
  SettingSecurity,
  SettingNotifications,
  SettingInviteFriend,
  SettingPreferences,
  SettingPreferencesCurrency,
  SettingPreferencesDApp,
} from '../components/setting';

const Stack = createStackNavigator();

export default function SettingTab() {
  return (
    <React.Fragment>
      <Stack.Navigator initialRouteName="SettingList">
        <Stack.Screen
          name="SettingList"
          component={SettingList}
          options={{
            headerStyle: {
              backgroundColor: '#3275BB',
            },
          }}
        />
        <Stack.Screen
          name="Setting-Wallet"
          component={SettingItem}
          options={{
            headerStyle: {
              backgroundColor: '#3275BB',
            },
          }}
        />
        <Stack.Screen
          name="Setting-Security"
          component={SettingSecurity}
          options={{
            headerStyle: {
              backgroundColor: '#3275BB',
            },
          }}
        />
        <Stack.Screen
          name="Setting-Notifications"
          component={SettingNotifications}
          options={{
            headerStyle: {
              backgroundColor: '#3275BB',
            },
          }}
        />
        <Stack.Screen
          name="About"
          component={SettingAbout}
          options={{
            headerStyle: {
              backgroundColor: '#3275BB',
            },
          }}
        />
        <Stack.Screen
          name="Setting-InviteFriend"
          component={SettingInviteFriend}
          options={{
            headerStyle: {
              backgroundColor: '#3275BB',
            },
          }}
        />
        <Stack.Screen
          name="Setting-Preferences"
          component={SettingPreferences}
          options={{
            headerStyle: {
              backgroundColor: '#3275BB',
            },
          }}
        />
        <Stack.Screen
          name="Currency"
          component={SettingPreferencesCurrency}
          options={{
            headerStyle: {
              backgroundColor: '#3275BB',
            },
          }}
        />
        <Stack.Screen
          name="DAppBrowser"
          component={SettingPreferencesDApp}
          options={{
            headerStyle: {
              backgroundColor: '#3275BB',
            },
          }}
        />
      </Stack.Navigator>
    </React.Fragment>
  );
}
