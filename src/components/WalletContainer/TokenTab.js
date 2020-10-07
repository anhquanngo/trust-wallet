import React from 'react';
import { View, Text } from 'react-native';

//import component

import { TokenWallet } from './TokenWallet';
import { CoinList } from './CoinList';
import styled from 'styled-components/native';

export const TokenTab = () => {
  return (
    <React.Fragment>
      <Container >
        <TokenWallet />
        <CoinList />
      </Container>
    </React.Fragment>
  );
}

const Container = styled.View`
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
    height: 100%;
`

