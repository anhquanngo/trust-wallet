import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

export default function Preferences({navigation}) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Currency')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center', margin: 10, height: 48}}>
              <View>
                <Text style={{fontSize: 16}}>Currency</Text>
              </View>
              <View>
                <Text style={{fontSize: 14, color: '#00000075'}}>USD</Text>
              </View>
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 22, margin: 10}}>
              <SimpleLineIcons size={20} name="arrow-right" />
            </Text>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('DAppBrowser')}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 0.5,
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center', margin: 10, height: 48}}>
              <View>
                <Text style={{fontSize: 16}}>DApp Browser</Text>
              </View>
            </View>
          </View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 22, margin: 10}}>
              <SimpleLineIcons size={20} name="arrow-right" />
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
