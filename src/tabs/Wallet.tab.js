import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

//import stack
import { DetailStack, Notification } from '../stacks';

//import component
import { HeaderWallet,  SearchItem} from '../components';

const Stack = createStackNavigator();

export default function WalletTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HeaderWallet"
        component={HeaderWallet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DetailStack"
        component={DetailStack}
        options={{
          headerStyle: {
            backgroundColor: '#3275BB',
          },
          headerTitle: props => <SearchItem {...props}/>
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
