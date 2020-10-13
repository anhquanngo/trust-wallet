import React from 'react';
import {useSelector} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

//import stack

import {DetailStack} from '../components/WalletContainer/Detail.stack';
import {Notification} from '../components/WalletContainer/Notification.stack';
import {SendETH} from '../components/WalletContainer/SendETH';
import { QRcodeItem } from '../components/WalletContainer/QRcode';

//import component
import {SearchItem} from '../components';

import WalletContainer from '../components/WalletContainer';

const Stack = createStackNavigator();

export const WalletScreen = () => {
  const theme = useSelector((state) => state.theme);
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
            backgroundColor: theme.BACKGROUND_COLOR_SECONDARY,          },
          headerTintColor: theme.TEXT_COLOR_PRIMARY,
          headerTitle: (props) => <SearchItem title="Search tokens" />,
        }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{
          headerStyle: {
            backgroundColor: theme.BACKGROUND_COLOR_SECONDARY,
          },
          headerTintColor: theme.TEXT_COLOR_PRIMARY,
        }}
      />
      <Stack.Screen
        name="SendETH"
        component={SendETH}
        options={{
          headerStyle: {
            backgroundColor: theme.BACKGROUND_COLOR_SECONDARY,
          },
          headerTintColor: theme.TEXT_COLOR_PRIMARY,
        }}
      />
      <Stack.Screen
        name="QRcode"
        component={QRcodeItem}
        options={{
          headerStyle: {
            backgroundColor: theme.BACKGROUND_COLOR_SECONDARY,
          },
          headerTintColor: theme.TEXT_COLOR_PRIMARY,
        }}
      />
    </Stack.Navigator>
  );
};
