import React from 'react';
import { View, Text } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function TokenWallet(props) {
    const {name} = props;
    return (
      <View
        style={{
          paddingTop: 30,
          backgroundColor: '#3375BB',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 50, color: '#FFFFFF', textAlign: 'center'}}>
          đ0.00
        </Text>
        <Text style={{fontSize: 25, color: '#BDD2E9', textAlign: 'center'}}>
          Multi-Coin Wallet {name}
        </Text>
        <View
          style={{
            paddingTop: 25,
            width: '90%',
            color: '#BDD2E9',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: '#4883C2',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="arrowup" size={30} color="#fff" />
          </View>
          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: '#4883C2',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="arrowdown" size={30} color="#fff" />
          </View>
          <View
            style={{
              height: 70,
              width: 70,
              backgroundColor: '#4883C2',
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesign name="tago" size={30} color="#fff" />
          </View>
        </View>
        <View
          style={{
            paddingTop: 10,
            paddingBottom: 30,
            width: '90%',
            color: '#BDD2E9',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{color: '#fff', fontSize: 20}}>Send</Text>
          <Text style={{color: '#fff', fontSize: 20}}>Receive</Text>
          <Text style={{color: '#fff', fontSize: 20}}>Buy</Text>
        </View>
      </View>
    );
  };
  
  TokenWallet.defaultProps = {
    name: 'Quan',
  };