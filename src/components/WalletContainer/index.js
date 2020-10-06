import React from 'react';
import {ScrollView} from 'react-native';
import styled from 'styled-components/native';

//import component
import {HeaderWallet} from './HeaderWallet';
import {TokenTab} from './TokenTab';
import {FinanceTab} from './FinanceTab';
import {CollectionTab} from './CollectionTab';

export default function WalletContainer({navigation}) {
  let [positionTab, setPositionTab] = React.useState(0);
  return (
    <WalletContainerStyle>
      <HeaderWallet navigation={navigation} setPositionTab={setPositionTab} />
      <ScrollView>
        {positionTab === 0 ? <TokenTab /> : null}
        {positionTab === 1 ? <FinanceTab /> : null}
        {positionTab === 2 ? <CollectionTab /> : null}
      </ScrollView>
    </WalletContainerStyle>
  );
}

const WalletContainerStyle = styled.View`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;
