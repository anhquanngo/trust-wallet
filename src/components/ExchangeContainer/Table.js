import React from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components'

export const Table = (props) => {
  const { list } = props;
  return (
    <Container>
      <View style={{ flexDirection: 'row', paddingTop: 5 }}>
        <View style={{ flex: 1 }}>
          <TextSecondary style={{ fontSize: 20 }}>Price BNB</TextSecondary>
        </View>
        <View style={{ flex: 1 }}>
          <TextSecondary style={{ fontSize: 20 }}>Amount</TextSecondary>
        </View>
      </View>
      <View style={{ paddingTop: 20 }}>
        {list.map((item, index) => {
          return (
            <View key={index} style={{ flexDirection: 'row', paddingBottom: 5 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, color: 'red' }}>{item.price}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, color: 'red', paddingLeft: 15 }}>
                  {item.amount} K
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <View
        style={{ padding: 15, flexDirection: 'row', justifyContent: 'center' }}>
        <Text style={{ fontSize: 18, color: '#54A99D' }}>0.0002091 ↑</Text>
      </View>
      <View>
        {list.map((item, index) => {
          return (
            <View key={index} style={{ flexDirection: 'row', paddingBottom: 5 }}>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, color: '#54A99D' }}>
                  {item.price}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, color: '#54A99D', paddingLeft: 15 }}>
                  {item.amount} K
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </Container>
  );
}

Table.defaultProps = {
  list: [
    {
      price: 0.00021346,
      amount: 3.46,
    },
    {
      price: 0.00021346,
      amount: 3.46,
    },
    {
      price: 0.00021346,
      amount: 3.46,
    },
    {
      price: 0.00021346,
      amount: 3.46,
    },
    {
      price: 0.00021346,
      amount: 3.46,
    },
    {
      price: 0.00021346,
      amount: 3.46,
    },
  ],
};
const Container = styled.View`
    background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`

const TextSecondary = styled.Text`
    color:  ${(props) => props.theme.TEXT_COLOR_SECONDARY};
`