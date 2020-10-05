import React from 'react';
import { View, Image, Text } from 'react-native';

export const HistoryItem = ({item}) => {
  return (
    <React.Fragment>
      <View style={{flexDirection: 'row', borderBottomWidth: 0.5}}>
        <View>
          <Image
            source={{uri: `${item.imageUrl}`}}
            style={{width: 60, height: 60, margin: 15}}
          />
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 20}}>{item.title}</Text>
          <Text style={{fontSize: 16, color: 'gray'}}>{item.percent}</Text>
        </View>
      </View>
    </React.Fragment>
  );
}
