import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import styled from 'styled-components/native';

import {useSelector, useDispatch} from 'react-redux';

import {convertDataToObject} from '../../utils';

const {height} = Dimensions.get('window');
const HistoryTransactionContainer = styled.View`
  height: ${height};
`;

export const HistoryTransaction = (props) => {
  let {symbol} = props.route.params;
  let AddressBip = useSelector((state) => state.user.AddressBip);

  let historyTransaction = useSelector((state) => state.historyTransaction);

  if (historyTransaction.ETH) {
    var [data, indexData] = convertDataToObject(historyTransaction[symbol]);
  }

  return (
    <HistoryTransactionContainer>
      {indexData &&
        indexData.map((item) => {
          return (
            <View style={{marginBottom: 10}}>
              <Text style={{fontWeight: 'bold'}}>{item}</Text>
              {data &&
                data[item].map((dataItem) => {
                  return (
                    <HistoryItem {...dataItem} AddressBip={AddressBip} />
                    // <View key={dataItem.block}>
                    //   <Text>{dataItem.value}</Text>
                    // </View>
                  );
                })}
            </View>
          );
        })}
    </HistoryTransactionContainer>
  );
};

const HistoryItemContainer = styled.View``;

const HistoryItemHeader = styled.View``;

const HistoryItemBody = styled.View``;

const TextStyle = styled.Text`
  font-size: ${(props) => props.size};
  font-weight: ${(props) => (props.bolder ? 'bold' : 'normal')};
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;

const HistoryItemFooter = styled.View``;

const HistoryItem = ({from, to, value, AddressBip}) => (
  <HistoryItemContainer>
    <HistoryItemHeader></HistoryItemHeader>
    <HistoryItemBody>
      <TextStyle size={20} bolder>
        {from == AddressBip ? 'Sent' : 'Received'}
      </TextStyle>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TextStyle size={14} bolder>
          {from == AddressBip ? 'To' : 'From'}
        </TextStyle>
        <TextStyle size={12} bolder>
          {from == AddressBip ? to : from}
        </TextStyle>
      </View>
    </HistoryItemBody>
    <HistoryItemFooter>
      <TextStyle size={12}>{value}</TextStyle>
    </HistoryItemFooter>
  </HistoryItemContainer>
);
