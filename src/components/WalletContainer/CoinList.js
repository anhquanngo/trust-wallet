import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';

import {getAllWalletByAddress} from '../../redux/actions';
import {intersectionArray} from '../../utils';

import {freshToken} from '../../services';

import {Coin} from './Coin';

import { setToken } from '../../services';

const CoinListContainer = styled.View`
  /* padding-bottom: 60; */
`;

export const CoinList = (props) => {
  // let dispatch = useDispatch();
  const renderItem = ({item}) => <Coin {...item} />;

  let coins = useSelector((state) => state.coins);
  let updateCoin = coins.filter((item) => item.active);

  // let updateListMoney = useSelector((state) => state.listMoney);

  // let user = useSelector((state) => state.user);
  // let token = useSelector(state => state.token);

  // let result = intersectionArray(updateCoin, updateListMoney, 'WalletSymbol');

  // console.log(updateCoin);
  // console.log(updateListMoney);
  // console.log(result);

  // React.useEffect(() => {
  //   setToken(token);
  //   dispatch(getAllWalletByAddress(user.AddressBip));
  // }, []);
  
  return (
    <React.Fragment>
      {updateCoin.length > 0 && (
        <CoinListContainer>
          <FlatList
            data={updateCoin}
            renderItem={renderItem}
            keyExtractor={(item) => item.Name}
          />
        </CoinListContainer>
      )}
    </React.Fragment>
  );
};
