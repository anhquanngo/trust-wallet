import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Setting} from '../stacks';
import {SettingStack} from '../stacks/settings';

const Stack = createStackNavigator();

export default function SettingTab() {
  return (
    <React.Fragment>
      <Stack.Navigator>
        <Stack.Screen
          name="Setting"
          component={Setting}
          options={{
            headerStyle: {
              backgroundColor: '#3275BB',
            },
          }}
        />
        <Stack.Screen
          name="SettingStack"
          component={SettingStack}
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
