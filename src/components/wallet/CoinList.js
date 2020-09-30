import React from 'react';

import { Coin } from './';

export default function CoinList(props) {
    let {lists} = props;
    return (
      <>{lists && lists.map((item, index) => <Coin key={index} {...item} />)}</>
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
    ],
  };