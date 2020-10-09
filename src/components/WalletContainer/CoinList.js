import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';

import {getAllWalletByAddress} from '../../redux/actions';
import {intersectionArray} from '../../utils';

import {freshToken} from '../../services';

import {Coin} from './Coin';

const CoinListContainer = styled.View`
  /* padding-bottom: 60; */
`;

export const CoinList = (props) => {
  let dispatch = useDispatch();
  const renderItem = ({item}) => <Coin {...item} />;

  let coins = useSelector((state) => state.coins);
  let updateCoin = coins.filter((item) => item.active);

  let updateListMoney = useSelector((state) => state.listMoney);

  let user = useSelector((state) => state.user);
  let result = intersectionArray(updateCoin, updateListMoney, 'WalletSymbol');
  console.log(result);

  React.useEffect(() => {
    dispatch(getAllWalletByAddress(user.AddressBip));
  }, []);
  
  return (
    <React.Fragment>
      {result.length > 0 && (
        <CoinListContainer>
          <FlatList
            data={result}
            renderItem={renderItem}
            keyExtractor={(item) => item.Name}
          />
        </CoinListContainer>
      )}
    </React.Fragment>
  );
};
