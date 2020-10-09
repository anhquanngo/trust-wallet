import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';

import {getAllWalletByAddress} from '../../redux/actions';

import {freshToken} from '../../services';

import {Coin} from './Coin';

const CoinListContainer = styled.View`
  /* padding-bottom: 60; */
`;

export const CoinList = (props) => {
  const renderItem = ({item}) => <Coin {...item} />;
  let dispatch = useDispatch();
  let coins = useSelector((state) => state.coins);
  let listMoney = coins.filter((item) => item.active);

  return (
    <React.Fragment>
      {listMoney.length > 0 && (
        <CoinListContainer>
          <FlatList
            data={listMoney}
            renderItem={renderItem}
            keyExtractor={(item) => item.Name}
          />
        </CoinListContainer>
      )}
    </React.Fragment>
  );
};
