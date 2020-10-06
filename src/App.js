import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import styled from 'styled-components/native';

<<<<<<< HEAD
import {Text} from 'react-native';
=======
import { ThemeProvider } from 'styled-components';
>>>>>>> feature/quan

import { Private, Public } from './routes';

import { getMnemonicStr } from './redux/actions';

<<<<<<< HEAD
import {getMnemonicStr, switchTheme} from './redux/actions';
import {DARK_THEME} from './redux/constants';

function App({mnemonicStr, getMnemonicStr, theme, switchTheme}) {
=======
function App({ mnemonicStr, getMnemonicStr, theme }) {
>>>>>>> feature/quan
  let [auth, setAuth] = React.useState(true);

  React.useEffect(() => {
    getMnemonicStr();
    // switchTheme(DARK_THEME);
    let data = {
      name: 'Thinh',
      age: 30,
      email: 'thinh@gmail.com',
    };
    AsyncStorage.setItem('user', JSON.stringify(data));
  }, []);

  console.log(theme);

  return (
    <>
      <NavigationContainer>
        <ThemeProvider theme={theme}>
<<<<<<< HEAD
          <StatusBar
            backgroundColor={theme.BACKGROUND_COLOR_PRIMARY}
            barStyle="dark-content"
          />
          <AppContainer>{auth ? <Public /> : <Private />}</AppContainer>
=======
          <StatusBar backgroundColor="#3375bb" barStyle="light-content" />
          {auth ? <Public /> : <Private />}
>>>>>>> feature/quan
        </ThemeProvider>
      </NavigationContainer>
    </>
  );
}

const mapStateToProp = (state) => ({
  mnemonicStr: state.mnemonicStr,
  theme: state.theme,
});

const mapDispatchToProp = {
  getMnemonicStr,
  switchTheme,
};

const AppContainer = styled.View`
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.theme.BACKGROUND_COLOR_PRIMARY};
`;

export default connect(mapStateToProp, mapDispatchToProp)(App);
