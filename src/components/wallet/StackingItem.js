import React from 'react';
import { View, Text, Image } from 'react-native';

export default function StackingItem({item}) {
  return (
    <React.Fragment>
      <View style={{flexDirection: 'row', borderBottomWidth: 0.5}}>
        <View>
          <Image
            source={{uri: `${item.imageUrl}`}}
            style={{width: 50, height: 50, margin: 15}}
          />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>{item.title}</Text>
          <Text style={{fontSize: 16, color: 'gray'}}>APR {item.percent}%</Text>
        </View>
      </View>
    </React.Fragment>
  );
}
