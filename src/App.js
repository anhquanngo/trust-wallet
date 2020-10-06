import * as React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { connect } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import styled from 'styled-components/native';

import { Text } from 'react-native';

import { Private, Public } from './routes';

import { getMnemonicStr, switchTheme } from './redux/actions';
import { DARK_THEME } from './redux/constants';
import { ThemeProvider } from 'styled-components'

function App({ mnemonicStr, getMnemonicStr, theme, switchTheme }) {
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
          <StatusBar
            backgroundColor={theme.BACKGROUND_COLOR_PRIMARY}
            barStyle="dark-content"
          />
          <AppContainer>{auth ? <Public /> : <Private />}</AppContainer>
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
