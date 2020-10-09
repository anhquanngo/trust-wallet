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
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding-top: 10;
  padding-bottom: 10px;
  padding-left: 10;
  padding-right: 10px;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_SECONDARY};
`;
