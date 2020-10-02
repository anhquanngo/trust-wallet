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

import { baseUri } from './src/redux/api';



const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

axios.defaults.baseURL = baseUri;

sagaMiddleware.run(rootSaga);

const rootApp = () => <Provider store={store}>
    <App />
</Provider>

AppRegistry.registerComponent(appName, () => rootApp);
