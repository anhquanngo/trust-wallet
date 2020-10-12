import React from 'react';
import {ScrollView, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height} = Dimensions.get('window');
//import component
import {HeaderWallet} from './HeaderWallet';
import {TokenTab} from './TokenTab';
import {FinanceTab} from './FinanceTab';
import {CollectionTab} from './CollectionTab';

export default function WalletContainer(props) {
  let [positionTab, setPositionTab] = React.useState(0);
  return (
    <WalletContainerStyle>
      <HeaderWallet {...props} setPositionTab={setPositionTab} />
      {positionTab === 0 ? (
        <ScrollView
          style={{
            overflow: 'scroll',
            height: (height * 4) / 5,
          }}>
          <TokenTab {...props} />
        </ScrollView>
      ) : null}
      {positionTab === 1 ? (
        <ScrollView
          style={{
            overflow: 'scroll',
            height: (height * 4) / 5,
          }}>
          <FinanceTab />
        </ScrollView>
      ) : null}
      {positionTab === 2 ? <CollectionTab /> : null}
    </WalletContainerStyle>
  );
}

const WalletContainerStyle = styled.View`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;
