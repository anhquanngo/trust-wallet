import React from 'react';
import { View, StyleSheet } from 'react-native';
import styled from 'styled-components/native';

// import component
import { TabNavigatorExchange } from './TabNavigatorExchange';

export const HeaderExchange = ({ setPositionTab }) => {
  return (
    <React.Fragment>
      <HeaderContainer>
        <TabNavigatorExchange setPositionTab={setPositionTab} />
      </HeaderContainer>
    </React.Fragment>
  );
}


const HeaderContainer = styled.View`
  flex-direction: row;
  height: 70;
  justify-content: space-between;
  align-items: center;
  padding-top: 10;
  padding-bottom: 10;
  padding-left: 10;
  padding-right: 10;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
`;
