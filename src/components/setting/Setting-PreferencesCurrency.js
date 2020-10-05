import React, {useState} from 'react';
import {View, Text, SafeAreaView, FlatList, ScrollView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const DATA_POPULAR = [
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
    currency: 'AUD - Australia Dollar',
  },
  {
    currency: 'RUB - Russian Ruble',
  },
  {
    currency: 'BTC- Bitcoin',
  },
  {
    currency: 'ETH- Ethereum',
  },
  {
    currency: 'BNB-BNB',
  },
];
const DATA_ALL = [
  {
    currency: 'AED- United States Dollar',
  },
  {
    currency: 'AFN - Afrikaans Afghani',
  },
  {
    currency: 'ALL - Albanian Lek',
  },
  {
    currency: 'ALL - Albanian Lek',
  },
  {
    currency: 'ALL - Albanian Lek',
  },
  {
    currency: 'ALL - Albanian Lek',
  },
  {
    currency: 'ALL - Albanian Lek',
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
      <ScrollView>
        <View style={{height: 50}}>
          <Text
            style={{
              color: '#3fb1ff',
              fontSize: 18,
              margin: 7,
              fontWeight: 'bold',
            }}>
            POPULAR
          </Text>
        </View>
        <SafeAreaView>
          <FlatList
            data={DATA_POPULAR}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>

        <View style={{height: 50}}>
          <Text
            style={{
              color: '#3fb1ff',
              fontSize: 18,
              margin: 7,
              fontWeight: 'bold',
            }}>
            ALL
          </Text>
        </View>
        <SafeAreaView>
          <FlatList
            data={DATA_ALL}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      </ScrollView>
    </View>
  );
}
