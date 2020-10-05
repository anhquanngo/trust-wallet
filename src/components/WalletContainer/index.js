import React from 'react';
import {View, Text} from 'react-native';

//import component
import { HeaderWallet } from './HeaderWallet';
import {TokenTab} from './TokenTab';
import {FinanceTab} from './FinanceTab';
import {CollectionTab} from './CollectionTab';


export default function WalletContainer({navigation}) {
    let [positionTab, setPositionTab] = React.useState(0);
  return <React.Fragment>
      <View>
          <HeaderWallet navigation={navigation} setPositionTab={setPositionTab} />
      </View>
      {
          positionTab === 0 ? <TokenTab /> : null
      }
      {
          positionTab === 1 ? <FinanceTab /> : null
      }
      {
          positionTab === 2 ? <CollectionTab /> : null
      }

  </React.Fragment>;
}