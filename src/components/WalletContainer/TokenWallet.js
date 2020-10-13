import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector, useDispatch} from 'react-redux';
import {getCurrentBalanceEth} from '../../redux/actions';

import styled from 'styled-components/native';

const TokenWalletContainer = styled.View`
  margin-top: ${props => props.theme.MARGIN_TOP};
  padding-top: 10px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  align-items: center;
  border-radius: ${props => props.theme.BORDER_RADIUS};
  /* border-bottom-width:1px; */
  /* margin-bottom: 5; */
`;

const TitleStyle = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_THIRDARY};
  font-size: ${(props) => (props.size ? props.size : '50px')};
  text-align: center;
`;
const SubTitleStyle = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
  font-size: 25px;
  text-align: center;
`;
const IconStyleContainer = styled.View`
  height: 70px;
  width: 70px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
`;

const IconStyle = styled(AntDesign)`
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;

const TextStyle = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
  font-size: 20px;
  padding-top: 10px;
  padding-bottom: 10px;
`;

const ReceiveStyle = styled.TouchableOpacity`

`;

export const TokenWallet = (props) => {
  const {name, navigation} = props;
  const balance = useSelector((state) => state.balance);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getCurrentBalanceEth());
  }, []);
  // console.log(balance);
  return (
    <TokenWalletContainer>
      {balance.Message ? (
        <TitleStyle size={20}>{balance.Message}</TitleStyle>
      ) : (
        <TitleStyle>${balance.Item}</TitleStyle>
      )}
      <SubTitleStyle>Multi-Coin Wallet {name}</SubTitleStyle>
      <View
        style={{
          paddingTop: 25,
          width: '90%',
          color: '#BDD2E9',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity onPress={() => navigation.navigate('SendETH')}>
          <View style={{alignItems: 'center'}}>
            <IconStyleContainer>
              <IconStyle name="arrowup" size={30} />
            </IconStyleContainer>
            <TextStyle>Send</TextStyle>
          </View>
        </TouchableOpacity>
        <ReceiveStyle onPress={() => navigation.navigate("QRcode")}>
          <IconStyleContainer>
            <IconStyle name="arrowdown" size={30} />
          </IconStyleContainer>
          <TextStyle> Receive</TextStyle>
        </ReceiveStyle>
        <View style={{alignItems: 'center'}}>
          <IconStyleContainer>
            <IconStyle name="tago" size={30} />
          </IconStyleContainer>
          <TextStyle> Buy</TextStyle>
        </View>
      </View>
    </TokenWalletContainer>
  );
};

TokenWallet.defaultProps = {
  name: 'Fin',
};
