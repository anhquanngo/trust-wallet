import React, {useState} from 'react';
import {View, Text, Switch, ScrollView, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styled from 'styled-components/native';
import {useSelector, useDispatch} from 'react-redux';
import {switchTheme} from '../../redux/actions';
import {LIGHT_THEME, DARK_THEME} from '../../redux/constants';

const ThemeSettingContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
`;

const ImageContainer = styled.View`
  justify-content: center;
  align-items: center;
  height: 50px;
  width: 50px;
  background-color: #666;
  border-radius: 10px;
  margin-right: 10px;
`;

export const ThemeSetting = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  let color;
  let dispatch = useDispatch();
  const toggleSwitch = async () => {
    setIsEnabled((isEnabled) => !isEnabled);
    if (isEnabled == true) {
      color = 0;
    } else {
      color = 1;
    }
    dispatch(
      switchTheme({
        data: color,
      }),
    );
  };

  return (
    <ThemeSettingContainer>
      <View style={{flexDirection: 'row'}}>
        <ImageContainer>
          <Ionicons name="moon" size={30} color="#fff" />
        </ImageContainer>
        <View style={{justifyContent: 'center'}}>
          <TextPrimary style={{fontSize: 22}}>Dark Mode</TextPrimary>
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
    </ThemeSettingContainer>
  );
};

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;
