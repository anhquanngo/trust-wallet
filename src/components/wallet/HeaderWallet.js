import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import Ionicon from 'react-native-vector-icons/Ionicons';

// import component
import {TabNavigatorWallet} from './';

export default function HeaderWallet({navigation, setPositionTab}) {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View>
          <Ionicon
            name="notifications-outline"
            size={25}
            color="#F1F6FA"
            onPress={() => navigation.navigate('Notification')}
          />
        </View>
        <TabNavigatorWallet setPositionTab={setPositionTab}/>
        <View>
          <Ionicon
            name="ellipsis-horizontal-outline"
            size={25}
            color="#F1F6FA"
            onPress={() => navigation.navigate('DetailStack')}
          />
        </View>
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3375BB',
  },
});
