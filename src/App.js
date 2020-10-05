import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import { Text } from 'react-native';

import {ThemeProvider} from 'styled-components';

import {Private, Public} from './routes';

import {getMnemonicStr} from './redux/actions';

function App({mnemonicStr, getMnemonicStr, theme}) {
  let [auth, setAuth] = React.useState(true);

  React.useEffect(() => {
    getMnemonicStr();
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
            <StatusBar backgroundColor="#3375bb" barStyle="light-content" />
            {auth ? <Public /> : <Private />}
        </ThemeProvider>

      </NavigationContainer>
    </>
  );
}

const mapStateToProp = (state) => ({
  mnemonicStr: state.mnemonicStr,
  theme: state.theme
});

const mapDispatchToProp = {
  getMnemonicStr,
};

export default connect(mapStateToProp, mapDispatchToProp)(App);
