import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native';

import {Coin} from './Coin';

const CoinListContainer = styled.View`
  padding-bottom: 60;
`;

export const CoinList = (props) => {
  let {lists} = props;
  const renderItem = ({item}) => <Coin {...item} />;
  return (
    <CoinListContainer>
        <FlatList
          data={lists}
          renderItem={renderItem}
          keyExtractor={(item) => item.title}
        />
    </CoinListContainer>
  );
};

CoinList.defaultProps = {
  lists: [
    {
      imageUrl: 'https://refur.eu/wp-content/uploads/2016/04/opengraph.png',
      title: 'Bitcoin',
      value: 'đ252,713,583.46 +0.97%',
      quality: 0,
      currency: 'BTC',
    },
    {
      imageUrl:
        'https://www.iconfinder.com/data/icons/cryptocoins/227/ETH-alt-512.png',
      title: 'Ethererum',
      value: 'đ8,318,398 -0.48%',
      quality: 0,
      currency: 'ETH',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'BNB',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'BNB',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'BNB',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'BNB',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'BNB',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'BNB',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'BNB',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'BNB',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'BNB',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'BNB',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'BNB',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'BNB',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
    {
      imageUrl:
        'https://en.bitcoinwiki.org/upload/en/images/thumb/1/1d/Binance-Coin-BNB-icon.png/300px-Binance-Coin-BNB-icon.png',
      title: 'FINFINE',
      value: 'đ615.316,79 -0.04%',
      quality: 0,
      currency: 'BNB',
    },
  ],
};
