import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';

import Ionicon from 'react-native-vector-icons/Ionicons';

// import component
import { TabNavigatorWallet } from './TabNavigatorWallet';

export const HeaderWallet = ({ navigation, setPositionTab }) => {
  return (
    <HeaderContainer>
      <View>
        <IconStyle
          name="notifications-outline"
          size={25}
          onPress={() => navigation.navigate('Notification')}
        />
      </View>
      <TabNavigatorWallet setPositionTab={setPositionTab} />
      <View>
        <IconStyle
          name="options-outline"
          size={25}
          onPress={() => navigation.navigate('DetailStack')}
        />
      </View>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.View`
  flex-direction: row;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  padding-left: 10px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
  border-radius: 10px;
`;

const IconStyle = styled(Ionicon)`
  color: ${props => props.theme.TEXT_COLOR_PRIMARY}
`;