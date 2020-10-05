import React, {useState} from 'react';
import {View, Text, Switch, Alert} from 'react-native';

export default function PreferencesDApp() {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);

  const messAlert = () => {
    Alert.alert(
      'Clear Browsing Data ?',
      'This will clear cache, cookies , and other browsing data.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          height: 70,
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent: 'center', margin: 10}}>
            <Text style={{fontSize: 16}}>Enable</Text>
          </View>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Text style={{fontSize: 22, margin: 10}}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={isEnabled1 ? '#f5dd4b' : '#f4f3f4'}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch1}
              value={isEnabled1}
            />
          </Text>
        </View>
      </View>

      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center', margin: 10}}>
              <Text style={{fontSize: 16}} onPress={messAlert}>
                Clear Browser Cache
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
