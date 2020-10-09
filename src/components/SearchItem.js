import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';

import {searchInput} from '../redux/actions';

export const SearchItem = ({title}) => {
  let value = useSelector(state => state.search);
  let dispatch = useDispatch();
  const onChangeText = (text) => {
    dispatch(searchInput(text));
  }
  return (
    <React.Fragment>
      <View style={styles.container}>
        <Ionicon name="search-outline" size={30} color="#DADADA" style={styles.iconSearch}/>
        <TextInput
          placeholder={title}
          placeholderTextColor="#AAAAAA"
          style={styles.textSearch}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </React.Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: '#f00',
    borderRadius: 10,
    backgroundColor: '#fff',
    width: "90%"
  },
  textSearch: {
    fontSize: 20,
    color: '#AAAAAA'
  },
  iconSearch: {
    paddingLeft: 10,
  }
});
