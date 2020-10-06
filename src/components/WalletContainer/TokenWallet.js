import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styled from 'styled-components/native';

const TokenWalletContainer = styled.View`
  padding-top: 30;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  align-items: center;
`;

const TitleStyle = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_THIRDARY};
  font-size: 50;
  text-align: center;
`;
const SubTitleStyle = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
  font-size: 25;
  text-align: center;
`;
const IconStyleContainer = styled.View`
  height: 70;
  width: 70;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
  border-radius: 50;
  justify-content: center;
  align-items: center;
`;

const IconStyle = styled(AntDesign)`
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;

const TextStyleContainer = styled.View`
  padding-top: 10;
  padding-bottom: 30;
  width: 90%;
  flex-direction: row;
  justify-content: space-around;
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;

const TextStyle = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
  font-size: 20;
`;

export const TokenWallet = (props) => {
  const {name} = props;
  return (
    <TokenWalletContainer>
      <TitleStyle> $0.00</TitleStyle>
      <SubTitleStyle>Multi-Coin Wallet {name}</SubTitleStyle>
      <View
        style={{
          paddingTop: 25,
          width: '90%',
          color: '#BDD2E9',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <IconStyleContainer>
          <IconStyle name="arrowup" size={30} />
        </IconStyleContainer>
        <IconStyleContainer>
          <IconStyle name="arrowdown" size={30} />
        </IconStyleContainer>
        <IconStyleContainer>
          <IconStyle name="tago" size={30} />
        </IconStyleContainer>
      </View>
      <TextStyleContainer>
        <TextStyle> Send</TextStyle>
        <TextStyle> Receive</TextStyle>
        <TextStyle> Buy</TextStyle>
      </TextStyleContainer>
    </TokenWalletContainer>
  );
};

TokenWallet.defaultProps = {
  name: 'Quan',
};
