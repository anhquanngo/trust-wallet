import React from 'react';
import { ScrollView, View } from 'react-native';
import styled from 'styled-components/native';

//import component

import { TokenWallet } from './TokenWallet';
import { CoinList } from './CoinList';

export const TokenTab = (props) => {
  return (
    <View>
      <TokenWallet {...props} />
      <CoinList />
    </View>
  );
};

