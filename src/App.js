import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import styled from 'styled-components/native';
import axios from 'axios';

import {Text} from 'react-native';

import {Private, Public} from './routes';

import {getMnemonicStr, switchTheme, getUserInfo} from './redux/actions';
import {DARK_THEME} from './redux/constants';
import {ThemeProvider} from 'styled-components';

import {getMnemonicStr_Uri} from './redux/api/index';

function App({theme, user}) {

  // React.useEffect(() => {
  //   getUserInfo();
  // }, []);

  console.log(user);

  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
          <StatusBar
            backgroundColor={theme.BACKGROUND_COLOR_PRIMARY}
            barStyle={theme.STATUS_BAR_STYLE}
          />
          <AppContainer>
            {user._id? <Public theme={theme} /> : <Private />}
          </AppContainer>
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}

const mapStateToProp = (state) => ({
  theme: state.theme,
  user: state.user
});

const mapDispatchToProp = {
  getUserInfo,
};

const AppContainer = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 5;
  padding-right: 5;
  padding-bottom: 5;
  padding-left: 5;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;

export default connect(mapStateToProp, mapDispatchToProp)(App);
