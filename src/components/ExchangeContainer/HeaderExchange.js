import React from 'react';
import {View, StyleSheet} from 'react-native';

// import component
import {TabNavigatorExchange} from './TabNavigatorExchange';

export const HeaderExchange = ({setPositionTab}) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <TabNavigatorExchange setPositionTab={setPositionTab}/>
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
