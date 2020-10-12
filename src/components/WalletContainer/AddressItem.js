import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import styled from 'styled-components/native';

export const AddressItem = (props) => {
  // let { imageUrl, title, value, quality, currency } = props;
  let {AddressBip, name} = props;
  // console.log(props);
  return (
      <CardContainer>
        <CardBody>
          <View style={{justifyContent: 'center'}}>
            <CardText fontSize={22}>{name}</CardText>
          </View>
        </CardBody>
        <View style={{justifyContent: 'center'}}>
          <CardText fontSize={18}>{`${AddressBip}`}</CardText>
        </View>
      </CardContainer>
  );
};

const CardContainer = styled.View`
  justify-content: space-between;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-top: ${props => props.theme.MARGIN_TOP};
  border-radius: 10px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
`;

const CardBody = styled.View`
  flex-direction: row;
`;

const CardText = styled.Text`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
  margin-right: 15px;
`;
