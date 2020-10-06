import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import styled from 'styled-components/native';

import Ionicon from 'react-native-vector-icons/Ionicons';

// import component
import { TabNavigatorWallet } from './TabNavigatorWallet';

export const HeaderWallet = ({ navigation, setPositionTab }) => {
  return (
    <React.Fragment>
      <View style={styles.container}>
        <View>
          <IconTextActive
            name="notifications-outline"
            size={25}
            onPress={() => navigation.navigate('Notification')}
          />
        </View>
        <TabNavigatorWallet setPositionTab={setPositionTab} />
        <View>
          <IconTextActive
            name="ellipsis-horizontal-outline"
            size={25}
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

const TextStyle = styled.Text`
color: ${props => props.theme.PRIMARY_TEXT_COLOR}`

const BackGroundStyle = styled.View`
color: ${props => props.theme.PRIMARY_BACKGROUND_COLOR}`

const ButtonActive = styled.View`
color: ${props => props.theme.PRIMARY_BUTTON_COLOR_ACTIVE}`

const ButtonDisActive = styled.View`
color: ${props => props.theme.PRIMARY_BUTTON_COLOR_DISACTIVE}`

const ButtonTextActive = styled.View`
color: ${props => props.theme.PRIMARY_BUTTON_TEXT_COLOR_ACTIVE}`

const ButtonTextDisActive = styled.View`
color: ${props => props.theme.PRIMARY_BUTTON_TEXT_COLOR_DISACTIVE}`

const IconTextActive = styled(Ionicon)`
color: ${props => props.theme.PRIMARY_ICON_TEXT_COLOR_ACTIVE}
`

const IconTextDisActive = styled.View`
color: ${props => props.theme.PRIMARY_ICON_TEXT_COLOR_ACTIVE}`
