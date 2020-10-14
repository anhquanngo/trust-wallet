import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

import { useDispatch } from 'react-redux';
import { deleteAddress } from '../../redux/actions';

const CardContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
  margin-top: ${(props) => props.theme.MARGIN_TOP};
  border-radius: 10px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
`;

const CardLeft = styled.TouchableOpacity`
  flex: 1;
`;

const CardBody = styled.View`
  flex-direction: row;
`;

const CardText = styled.Text`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
  margin-right: 15px;
`;

const ButtonStyle = styled.TouchableOpacity`
  width: 50px;
  height: 30px;
  border-radius: ${(props) => props.theme.BORDER_RADIUS};
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
  justify-content: center;
  align-items: center;
`;

const TextStyle = styled.Text`
  font-size: ${(props) => props.size};
  color: ${(props) => props.theme.TEXT_COLOR_THIRDARY};
`;

export const AddressItem = (props) => {
  let dispatch = useDispatch();
  // let { imageUrl, title, value, quality, currency } = props;
  let {AddressBip, name, setToAddress, setModalAddress, modalAddress} = props;
  // console.log(props);

  return (
    <CardContainer>
      <CardLeft onPress={() => {
        setToAddress(AddressBip);
        setModalAddress(!modalAddress)
        }}>
        <CardBody>
          <View style={{justifyContent: 'center'}}>
            <CardText fontSize={18}>{name}</CardText>
          </View>
        </CardBody>
        <View style={{justifyContent: 'center'}}>
          <CardText fontSize={14}>{`${AddressBip}`}</CardText>
        </View>
      </CardLeft>
      <ButtonStyle onPress={() => dispatch(deleteAddress(AddressBip))}>
        <TextStyle size={14}>Delete</TextStyle>
      </ButtonStyle>
    </CardContainer>
  );
};
