import React from 'react';
import {ScrollView, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height} = Dimensions.get('window');
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
      <ScrollView
        style={{
          overflow: 'scroll',
          height: (height * 4) / 5,
        }}>
        {positionTab === 0 ? <TokenTab /> : null}
      </ScrollView>
      {positionTab === 1 ? <FinanceTab /> : null}
      {positionTab === 2 ? <CollectionTab /> : null}
    </WalletContainerStyle>
  );
}

const WalletContainerStyle = styled.View`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;
