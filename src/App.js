import * as React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';

import {Private, Public} from './routes';

import {getMnemonicStr} from './redux/actions';

function App({mnemonicStr, getMnemonicStr}) {
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

  console.log(mnemonicStr);

  return (
    <>
      <NavigationContainer>
        <StatusBar backgroundColor="#3375bb" barStyle="light-content" />
        {auth ? <Public /> : <Private />}
      </NavigationContainer>
    </>
  );
}

const mapStateToProp = (state) => ({
  mnemonicStr: state.mnemonicStr,
});

const mapDispatchToProp = {
  getMnemonicStr,
};

export default connect(mapStateToProp, mapDispatchToProp)(App);
