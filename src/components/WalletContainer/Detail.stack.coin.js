import React, {useState} from 'react';
import {View, Text, Switch, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';
import {switchCoin, insertWalletSymbol} from '../../redux/actions';
import {freshToken} from '../../services';

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
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 3,
      }}>
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
          <Text style={{fontSize: 22}}>{Name}</Text>
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
    </View>
  );
};
