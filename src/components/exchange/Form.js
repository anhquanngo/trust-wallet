import React from 'react';
import {View, Text, Button, TextInput} from 'react-native';

export default function Form() {
  return (
    <View>
      <Text style={{fontSize: 24, marginLeft: 10}}>MITH / BNB</Text>
      <View style={{margin: 15}}>
        <View
          style={{flexDirection: 'row', justifyContent: 'center', padding: 15}}>
          <Button title="Buy" color="#49A397"></Button>
          <Button title="Sell" color="#B1B1B1"></Button>
        </View>
        <TextInput
          placeholder="Price BNB"
          style={{height: 50, borderColor: 'gray', borderWidth: 0.5}}
        />
        <Text
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            fontSize: 20,
            color: 'gray',
          }}>
          ~đ128.67
        </Text>
        <TextInput
          placeholder="Amount MITH"
          style={{height: 50, borderColor: 'gray', borderWidth: 0.5}}
        />
      </View>
      <View
        style={{flexDirection: 'row', justifyContent: 'center', padding: 15}}>
        <Button title="25%" color="#6295CB"></Button>
        <Button title="50%" color="#6295CB"></Button>
        <Button title="75%" color="#6295CB"></Button>
        <Button title="100%" color="#6295CB"></Button>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 15,
          marginRight: 15,
          paddingTop: 10,
        }}>
        <Text>Balance</Text>
        <Text>0 BNB</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 15,
          marginRight: 15,
          paddingTop: 10,
        }}>
        <Text>Balance</Text>
        <Text>0 BNB</Text>
      </View>
      <View style={{margin: 20}}>
        <Button title="Buy MITH" color="#49A397"></Button>
      </View>
    </View>
  );
}
