import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import { SettingItem, SettingList } from '../components/setting';

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
          name="SettingItem"
          component={SettingItem}
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
