/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/es/integration/react';
import axios from 'axios';

import App from './src/App';
import { name as appName } from './src/app.json';
import { baseUri, APP_SECRET_KEY } from './src/redux/api';

//set default axios request
axios.defaults.baseURL = baseUri;
axios.defaults.headers.common['APP_SECRET_KEY'] = APP_SECRET_KEY;

import rootReducer from './src/redux/reducers';
import rootSaga from './src/redux/sagas';


//config redux with redux persist
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['theme', 'user', 'coins'],
  blacklist: [''],
};

const sagaMiddleware = createSagaMiddleware();
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));

const persistedStore = persistStore(store);

sagaMiddleware.run(rootSaga);

const rootApp = () => (
  <Provider store={store}>
    <PersistGate persistor={persistedStore} loading={null}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => rootApp);
