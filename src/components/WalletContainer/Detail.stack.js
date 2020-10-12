import React, {useState} from 'react';
import {View, Text, Switch, Dimensions, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';

import {DetailStackCoin} from './Detail.stack.coin';

import {coinList} from '../../configs/coinList';
import styled from 'styled-components/native';
const {height} = Dimensions.get('window');

const DetailStackContainer = styled.View`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;

export const DetailStack = () => {
  let coins = useSelector((state) => state.coins);
  let search = useSelector((state) => state.search);
  return (
    <DetailStackContainer>
      <ScrollView style={{
        height: height
      }}>
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
          </ScrollView>
    </DetailStackContainer>
  );
};
