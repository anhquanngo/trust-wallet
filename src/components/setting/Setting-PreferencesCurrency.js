import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const DATA = [
  {
    currency: 'USD-USD Dollar',
  },
  {
    currency: 'GBP-British Pound',
  },
  {
    currency: 'EUR-Euro',
  },
  {
    currency: 'EUR-Euro',
  },
  {
    currency: 'EUR-Euro',
  },
];
const Item = ({currency}) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  return (
    <View
      style={{
        height: 50,
        margin: 7,
        paddingLeft: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}>
      <Text>{currency}</Text>
      <CheckBox
        disabled={false}
        value={toggleCheckBox}
        onValueChange={(newValue) => setToggleCheckBox(newValue)}
      />
    </View>
  );
};
export default function PreferencesCurrency() {
  const renderItem = ({item}) => <Item currency={item.currency} />;
  return (
    <View>
      <View style={{height: 50}}>
        <Text
          style={{
            color: '#3fb1ff',
            fontSize: 18,
            margin: 7,
            fontWeight: 'bold',
          }}>
          Popular
        </Text>
      </View>
      <SafeAreaView>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
}
