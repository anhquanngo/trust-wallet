import {combineReducers} from 'redux';

import {
  getMnemonicStr_Reducer,
  getFullKey_Reducer,
  getCatagoriesMoney_Reducer,
} from './user.reducer';

import { themeReducer } from './theme.reducer';


const rootReducer = combineReducers({
  mnemonicStr: getMnemonicStr_Reducer,
  user: getFullKey_Reducer,
  catagories: getCatagoriesMoney_Reducer,
  theme: themeReducer
});

export default rootReducer;
