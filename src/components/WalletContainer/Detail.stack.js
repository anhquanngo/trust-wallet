import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';

import {DetailStackCoin} from './Detail.stack.coin';

import {coinList} from '../../configs/coinList';

export const DetailStack = () => {
  let coins = useSelector((state) => state.coins);
  let search = useSelector((state) => state.search);
  return (
    <React.Fragment>
      {coins &&
        coins
          .filter((item) => {
            return (
              item.WalletSymbol.toUpperCase().indexOf(search.toUpperCase()) !==
                -1 ||
              item.Name.toUpperCase().indexOf(search.toUpperCase()) !== -1
            );
          })
          .map((item, index) => <DetailStackCoin key={index} {...item} />)}
    </React.Fragment>
  );
};
