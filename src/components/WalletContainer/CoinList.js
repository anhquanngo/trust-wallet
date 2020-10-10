import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';

import {getAllWalletByAddress} from '../../redux/actions';
import {intersectionArray} from '../../utils';

import {freshToken} from '../../services';

import {Coin} from './Coin';

import {setToken} from '../../services';


const CoinListContainer = styled.View`
  /* padding-bottom: 60; */
`;

export const CoinList = (props) => {
  // console.log("CoinList rendering...");
  const renderItem = ({item}) => <Coin {...item} />;
  const dispatch = useDispatch();
  let user = useSelector((state) => state.user);

  let coins = useSelector((state) => state.coins.filter((item) => item.active));
  let listMoney = useSelector(state => state.listMoney);
  console.log(listMoney);
  // let result = intersectionArray(coins, listMoney, 'WalletSymbol');
  // console.log(result);
  
  React.useEffect(() => {
      dispatch(getAllWalletByAddress(user.AddressBip));
  }, []);

  return (
    <React.Fragment>
      {coins.length > 0 && (
        <CoinListContainer>
          <FlatList
            data={coins}
            renderItem={renderItem}
            keyExtractor={(item) => item.Name}
          />
        </CoinListContainer>
      )}
    </React.Fragment>
  );
};
