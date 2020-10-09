import React from 'react';
import {FlatList, ScrollView} from 'react-native';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';

import {getAllWalletByAddress} from '../../redux/actions';

import {freshToken} from '../../services';

import {Coin} from './Coin';

const CoinListContainer = styled.View`
  padding-bottom: 60;
`;

export const CoinList = (props) => {
  let {lists} = props;

  const renderItem = ({item}) => <Coin {...item} />;
  let dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  let state = useSelector((state) => state);
  let listMoney = useSelector((state) => state.listMoney);

  console.log('Coin List rendering...');

  React.useEffect(() => {
    let getList = async () => {
      let token = await freshToken();
      console.log(token);
      dispatch(getAllWalletByAddress(user.AddressBip));
    };
    getList();
    dispatch(getAllWalletByAddress(user.AddressBip));
  }, []);

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