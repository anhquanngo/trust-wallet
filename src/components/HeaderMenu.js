import React from 'react';
import {View, StyleSheet } from 'react-native';

// import component
import { SearchItem } from './';

export default function HeaderMenu({navigation}) {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <SearchItem />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 70,
    backgroundColor: "#3375BB",
    alignItems:"center",
    justifyContent: "center"
  },
});