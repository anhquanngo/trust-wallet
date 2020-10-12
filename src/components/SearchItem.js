import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {useSelector, useDispatch} from 'react-redux';

import {searchInput} from '../redux/actions';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: ${(props) => props.theme.BORDER_RADIUS};
  width: 90%;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
  padding-left: 10px;
`;

const InputStyle = styled.TextInput`
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
  font-size: 16px;
  
`;

const IconStyle = styled(Ionicon)`
  color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
`;

export const SearchItem = ({title}) => {
  let value = useSelector((state) => state.search);
  let theme = useSelector((state) => state.theme);

  let dispatch = useDispatch();
  const onChangeText = (text) => {
    dispatch(searchInput(text));
  };
  return (
    <React.Fragment>
      <SearchContainer>
        <IconStyle name="search-outline" size={18} />
        <InputStyle
          placeholder={title}
          placeholderTextColor={theme.TEXT_COLOR_SECONDARY}
          onChangeText={onChangeText}
          value={value}
        
        />
      </SearchContainer>
    </React.Fragment>
  );
};
