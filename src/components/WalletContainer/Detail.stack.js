import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';

import { DetailStackCoin } from './Detail.stack.coin';

import { coinList } from '../../configs/coinList';

export const DetailStack = () => {
  let coins = useSelector(state => state.coins);
  return (
    <React.Fragment>
      {
        coins && coins.map((item, index) => <DetailStackCoin key={index} {...item} />)
      }
    </React.Fragment>
  );
};
