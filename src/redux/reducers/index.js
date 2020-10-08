import {combineReducers} from 'redux';

import {
  getMnemonicStr_Reducer,
  getTokenStr_Reducer,
  getUserInfo_Reducer,
  getCatagoriesMoney_Reducer,
} from './user.reducer';

import { themeReducer } from './theme.reducer';


const rootReducer = combineReducers({
  mnemonicStr: getMnemonicStr_Reducer,
  token: getTokenStr_Reducer,
  user: getUserInfo_Reducer,
  catagories: getCatagoriesMoney_Reducer,
  theme: themeReducer
});

export default rootReducer;
