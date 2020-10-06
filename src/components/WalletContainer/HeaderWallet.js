import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';

import Ionicon from 'react-native-vector-icons/Ionicons';

// import component
import { TabNavigatorWallet } from './TabNavigatorWallet';

export const HeaderWallet = ({ navigation, setPositionTab }) => {
  return (
    <React.Fragment>
      {/* <View style={styles.container}> */}
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
            name="ellipsis-horizontal-outline"
            size={25}
            onPress={() => navigation.navigate('DetailStack')}
          />
        </View>
      </HeaderContainer>
    </React.Fragment>
  );
};

const HeaderContainer = styled.View`
  flex-direction: row;
  height: 70;
  justify-content: space-between;
  align-items: center;
  padding-top: 10;
  padding-right: 10;
  padding-bottom: 10;
  padding-left: 10;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
`;

const IconStyle = styled(Ionicon)`
  color: ${props => props.theme.TEXT_COLOR_PRIMARY}
`;
