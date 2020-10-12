import React, {useState} from 'react';
import {
  View,
  Text,
  Switch,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
import {ThemeSetting} from './ThemeSetting';

const {height} = Dimensions.get('window');

export const SettingList = ({navigation}) => {
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
    <Container>
      <ScrollView
        style={{
          overflow: 'scroll',
          height: height,
        }}>
        <ThemeSetting />
      </ScrollView>
    </Container>
  );
};

const Container = styled.View`
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;

const TextPrimary = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_PRIMARY};
`;
const TextSecondary = styled.Text`
  color: ${(props) => props.theme.TEXT_COLOR_SECONDARY};
`;
