import React from 'react';
import {View, Text, Image} from 'react-native';

import {HistoryItem} from './HistoryItem';

export const HistoryList = (props) => {
  const {lists} = props;
  return (
    <View>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{color: '#373D4D', fontSize: 28, padding: 12}}>
            History
          </Text>
          <Text style={{color: '#3E7CBE', fontSize: 24, padding: 12}}>
            See All
          </Text>
        </View>
        {lists &&
          lists.map((item, index) => <HistoryItem item={item} key={index} />)}
      </View>
    </View>
  );
}

HistoryList.defaultProps = {
  lists: [
    {
      imageUrl:
        'https://s2.coinmarketcap.com/static/img/coins/200x200/2011.png',
      title: 'https://reactnavigation.org/...',
      percent: 'https://reactnavigation.org/docs/getting-started/',
    },
    {
      imageUrl:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/tron-1429786-1210336.png',
      title: 'https://reactnavigation.org/...',
      percent: 'https://reactnavigation.org/docs/getting-started/',
    },
    {
      imageUrl:
        'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960',
      title: 'https://reactnavigation.org/...',
      percent: 'https://reactnavigation.org/docs/getting-started/',
    },
  ],
};
