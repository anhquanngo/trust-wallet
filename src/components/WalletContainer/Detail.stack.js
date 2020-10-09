import React, { useState } from 'react';
import { View, Text, Switch } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { DetailStackCoin } from './Detail.stack.coin';

import { coinList } from '../../configs/coinList';

export const DetailStack = ({ lists }) => {
  return (
    <React.Fragment>
      {
        lists && lists.map((item, index) => <DetailStackCoin key={index} {...item} />)
      }
    </React.Fragment>
  );
};

DetailStack.defaultProps = {
  lists: coinList
};
