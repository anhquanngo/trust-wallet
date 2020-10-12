import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';
import {StackingItem} from './StackingItem';

const StackingListContainer = styled.View`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
`;

const TitleHeader = styled.Text`
  font-size: ${(props) => props.size};
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;

export const StakingList = (props) => {
  const {lists} = props;
  return (
    <StackingListContainer>
      <TitleHeader size={20}>Staking</TitleHeader>
      {lists &&
        lists.map((item, index) => {
          return <StackingItem item={item} key={index} />;
        })}
    </StackingListContainer>
  );
};

StakingList.defaultProps = {
  lists: [
    {
      imageUrl:
        'https://s2.coinmarketcap.com/static/img/coins/200x200/2011.png',
      title: 'Tezos (XTZ)',
      percent: '6,09',
    },
    {
      imageUrl:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/tron-1429786-1210336.png',
      title: 'Tron (TRX)',
      percent: '0,74',
    },
    {
      imageUrl:
        'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960',
      title: 'Cosmos (ATOM)',
      percent: '8,06',
    },
    {
      imageUrl:
        'https://s2.coinmarketcap.com/static/img/coins/200x200/2011.png',
      title: 'Tezos (XTZ)',
      percent: '6,09',
    },
    {
      imageUrl:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/tron-1429786-1210336.png',
      title: 'Tron (TRX)',
      percent: '0,74',
    },
    {
      imageUrl:
        'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960',
      title: 'Cosmos (ATOM)',
      percent: '8,06',
    },
  ],
};
