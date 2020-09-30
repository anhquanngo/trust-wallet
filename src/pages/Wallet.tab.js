import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//import stack
import {DetailStack, Notification} from '../components/wallet';

//import component
import {SearchItem} from '../components';

import WalletContainer from './wallet';

const Stack = createStackNavigator();

export default function WalletTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="WalletContainer"
        component={WalletContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailStack"
        component={DetailStack}
        options={{
          headerStyle: {
            backgroundColor: '#3275BB',
          },
          headerTitle: (props) => <SearchItem {...props} />,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerStyle: {
            backgroundColor: '#3275BB',
          },
        }}
      />
    </Stack.Navigator>
  );
}
