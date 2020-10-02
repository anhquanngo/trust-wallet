import React, {useState} from 'react';
import {View, Text, Switch} from 'react-native';

export default function Notifications() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent: 'center', margin: 10}}></View>
          <View style={{justifyContent: 'center'}}>
            <Text style={{fontSize: 16}}>Allow Push Notifications</Text>
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 22, margin: 10}}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </Text>
        </View>
      </View>
    </View>
  );
}
