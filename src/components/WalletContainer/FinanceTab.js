import React from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height} = Dimensions.get('window');

const Container = styled.View`
  /* background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY}; */
  margin-top: ${(props) => props.theme.MARGIN_TOP};
  border-radius: ${(props) => props.theme.BORDER_RADIUS};
`;

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;
const TextSecondary = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;

const ItemCoin = styled.View`
  flex-direction: row;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  border-radius: 10px;
`;

const TextDemo = styled.Text`
  margin-top: 330px;
  text-align: center;
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;

export const FinanceTab = (props) => {
  const {lists} = props;
  return (
    <Container>
      <TextDemo>Tính năng đang cập nhật...</TextDemo>
      {/* <TextSecondary style={{fontWeight: 'bold', fontSize: 20, padding: 10}}>
          Staking
        </TextSecondary>
        {lists &&
          lists.map((item, index) => {
            return (
              <ItemCoin key={index}>
                <View>
                  <Image
                    source={{uri: `${item.imageUrl}`}}
                    style={{width: 50, height: 50, margin: 10}}
                  />
                </View>
                <View style={{justifyContent: 'center'}}>
                  <TextPrimary style={{fontSize: 20}}>{item.title}</TextPrimary>
                  <TextSecondary style={{fontSize: 16, color: 'gray'}}>
                    APR {item.percent}%
                  </TextSecondary>
                </View>
              </ItemCoin>
            );
          })} */}
    </Container>
  );
};

FinanceTab.defaultProps = {
  lists: [
    {
      imageUrl:
        'https://cdn.iconscout.com/icon/premium/png-512-thumb/tron-1429786-1210336.png',
      title: 'Tron (TRX)',
      percent: '0,74',
    },
    {
      imageUrl:
        'https://assets.coingecko.com/coins/images/1481/large/cosmos_hub.png?1555657960',
      title: 'Cosmos (ATOM)',
      percent: '8,06',
    },
    {
      imageUrl:
        'https://s2.coinmarketcap.com/static/img/coins/200x200/2011.png',
      title: 'Tezos (XTZ)',
      percent: '6,09',
    },
  ],
};
