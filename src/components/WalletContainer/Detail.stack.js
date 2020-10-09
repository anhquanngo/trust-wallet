import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DetailStackCoin} from './Detail.stack.coin';

export const DetailStack = ({lists}) => {
  console.log("DetailStack rendering")
  return (
    <React.Fragment>
        {
            lists && lists.map((item, index) => <DetailStackCoin key={index} {...item}/>)
        }
    </React.Fragment>
  );
};

DetailStack.defaultProps = {
  lists: [
    {
      WalletSymbol: 'FIN',
      Name: 'FINFINE',
    },
    {
      WalletSymbol: 'FIN2',
      Name: 'FINFINE2',
    },
    {
      WalletSymbol: 'FIN3',
      Name: 'FINFINE3',
    },
    {
      WalletSymbol: 'FIN3',
      Name: 'FINFINE3',
    },
    {
      WalletSymbol: 'FIN4',
      Name: 'FINFINE4',
    },
  ],
};
