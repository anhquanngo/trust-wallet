import React from 'react';
import {View, Text} from 'react-native';

import {HeaderExchange} from '../../components/exchange';

import ExchangeTab from './ExchangeTab';
import SwapTab from './SwapTab';

export default function ExchangeContainer({navigation}) {
  let [positionTab, setPositionTab] = React.useState(0);
  return (
    <React.Fragment>
      <View>
        <HeaderExchange navigation={navigation} setPositionTab={setPositionTab} />
      </View>
      <View>
        {
          positionTab === 0 ? <SwapTab /> : null
        }
        {
          positionTab === 1 ? <ExchangeTab /> : null
        }
        
      </View>
    </React.Fragment>
  );
}
