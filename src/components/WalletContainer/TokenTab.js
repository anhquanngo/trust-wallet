import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

//import component

import { TokenWallet } from './TokenWallet';
import { CoinList } from './CoinList';

export const TokenTab = () => {
  return (
    <TokekWalletContainer>
      <TokenWallet />
      <CoinList />
    </TokekWalletContainer>
  );
};

const TokekWalletContainer = styled.View``;
