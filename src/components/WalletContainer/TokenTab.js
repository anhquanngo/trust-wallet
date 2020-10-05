import React from 'react';
import {View, Text} from 'react-native';

//import component

import {TokenWallet} from './TokenWallet';
import {CoinList} from './CoinList';

export const TokenTab = () => {
  return (
    <React.Fragment>
      <View>
        <TokenWallet />
      </View>
      <View>
        <CoinList />
      </View>
    </React.Fragment>
  );
}
