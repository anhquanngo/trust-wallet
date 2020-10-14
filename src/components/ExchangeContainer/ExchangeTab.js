import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components/native';

import {Table} from './Table';
import {Form} from './Form';

export default function ExchangeTab() {
  return (
    <Container>
      <TextDemo>Tính năng đang cập nhật...</TextDemo>
    </Container>
    // <Container>
    //     <View style={{ flexDirection: "row", borderBottomWidth: 0.5 }}>
    //         <View style={{ flex: 1 }}>
    //             <Form />
    //         </View>
    //         <View style={{ flex: 1 }}>
    //             <Table />
    //         </View>
    //     </View>
    //     <View style={{ flexDirection: "row", justifyContent: "space-between", margin: 20 }}>
    //         <TextStylesPrimary >Open Order</TextStylesPrimary>
    //         <TextStylesSecondary >All</TextStylesSecondary>
    //     </View>
    // </Container>
  );
}

const Container = styled.View`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
  height: 100%;
`;
const TextStylesPrimary = styled.Text`
  font-size: 20;
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;
const TextStylesSecondary = styled.Text`
  font-size: 20;
  color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
`;

const TextDemo = styled.Text`
  margin-top: 330px;
  text-align: center;
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;
