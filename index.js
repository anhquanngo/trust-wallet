/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import axios from 'axios';

import App from './src/App';
import {name as appName} from './src/app.json';

import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './src/redux/reducers';
import rootSaga from './src/redux/sagas';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { PersistGate } from 'redux-persist/es/integration/react';

import { baseUri } from './src/redux/api';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: [],
    blacklist: ['theme']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);


const sagaMiddleware = createSagaMiddleware();
const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware));
const persistedStore = persistStore(store);

axios.defaults.baseURL = baseUri;

sagaMiddleware.run(rootSaga);

const rootApp = () => <Provider store={store}>
    <PersistGate persistor={persistedStore} loading={null}>

        <App />
    </PersistGate>
</Provider>

AppRegistry.registerComponent(appName, () => rootApp);
