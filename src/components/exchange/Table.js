<<<<<<< HEAD
import React from 'react';
import {View, Text} from 'react-native';

export default function Table(props) {
  const {list} = props;
  return (
    <View>
      <View style={{flexDirection: 'row', paddingTop: 5}}>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20}}>Price BNB</Text>
        </View>
        <View style={{flex: 1}}>
          <Text style={{fontSize: 20}}>Amount</Text>
        </View>
      </View>
      <View style={{paddingTop: 20}}>
        {list.map((item, index) => {
          return (
            <View key={index} style={{flexDirection: 'row', paddingBottom: 5}}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 18, color: 'red'}}>{item.price}</Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 18, color: 'red', paddingLeft: 15}}>
                  {item.amount} K
                </Text>
              </View>
            </View>
          );
        })}
      </View>
      <View
        style={{padding: 15, flexDirection: 'row', justifyContent: 'center'}}>
        <Text style={{fontSize: 18, color: '#54A99D'}}>0.0002091 ↑</Text>
      </View>
      <View>
        {list.map((item, index) => {
          return (
            <View key={index} style={{flexDirection: 'row', paddingBottom: 5}}>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 18, color: '#54A99D'}}>
                  {item.price}
                </Text>
              </View>
              <View style={{flex: 1}}>
                <Text style={{fontSize: 18, color: '#54A99D', paddingLeft: 15}}>
                  {item.amount} K
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </View>
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
=======
import React from 'react'
import { View, Text } from 'react-native'

export default function Table(props) {
    const { list } = props
    return (
        <View>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20 }}>Price BNB</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20 }}>Amount</Text>
                </View>
            </View>
            <View style={{ paddingTop: 20 }}>
                {
                    list.map((item, index) => {
                        return (
                            <View key={index} style={{ flexDirection: "row", paddingBottom: 5 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18, color: 'red' }}>{item.price}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18, color: 'red', paddingLeft: 15 }}>{item.amount} K</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            <View style={{ padding: 15, flexDirection: "row", justifyContent: "center" }}>
                <Text style={{ fontSize: 18, color: '#54A99D' }}>0.0002091 ↑</Text>
            </View>
            <View>
                {
                    list.map((item, index) => {
                        return (
                            <View key={index} style={{ flexDirection: "row", paddingBottom: 5 }}>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18, color: '#54A99D' }}>{item.price}</Text>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Text style={{ fontSize: 18, color: '#54A99D', paddingLeft: 15 }}>{item.amount} K</Text>
                                </View>
                            </View>
                        )
                    })
                }
            </View>
        </View>
    )
}

Table.defaultProps = {
    list: [
        {
            price: 0.00021346,
            amount: 3.46

        }, {
            price: 0.00021346,
            amount: 3.46
        }, {
            price: 0.00021346,
            amount: 3.46
        }, {
            price: 0.00021346,
            amount: 3.46
        }, {
            price: 0.00021346,
            amount: 3.46
        }, {
            price: 0.00021346,
            amount: 3.46
        }

    ]
}
>>>>>>> feature/quan
