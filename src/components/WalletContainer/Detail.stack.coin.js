import React, {useState} from 'react';
import {View, Text, Switch, Image, Dimensions, ScrollView} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {switchCoin, insertWalletSymbol} from '../../redux/actions';
import {freshToken} from '../../services';
import styled from 'styled-components/native';

const DetailStackCoinContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.MARGIN_TOP};
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  border-radius: ${(props) => props.theme.BORDER_RADIUS};
`;

const TextStyle = styled.Text`
  font-size: ${props => props.size ? props.size : 'inherit'};
  color: ${props => props.theme.TEXT_COLOR_PRIMARY};
`;

export const DetailStackCoin = ({WalletSymbol, Name, avatar, active}) => {
  let dispatch = useDispatch();
  let user = useSelector((state) => state.user);
  const toggleSwitch = async () => {
    dispatch(
      switchCoin({
        name: Name,
        address: user.AddressBip,
        symbol: WalletSymbol,
        active: !active,
      }),
    );
  };
  return (

      <DetailStackCoinContainer>
        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent: 'center', margin: 10}}>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                height: 50,
                width: 50,
                backgroundColor: '#000',
                borderRadius: 25,
              }}>
              <Image style={{width: 50, height: 50}} source={{uri: avatar}} />
              {/* <Ionicons name="moon" size={30} color="#fff" /> */}
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <TextStyle size={20}>{Name}</TextStyle>
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 22, margin: 10}}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={active ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={active}
            />
          </Text>
        </View>
      </DetailStackCoinContainer>
  );
};
