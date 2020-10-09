import {combineReducers} from 'redux';

import {
  getMnemonicStr_Reducer,
  getTokenStr_Reducer,
  getUserInfo_Reducer,
  getAllWalletByAddress_Reducer,
  insertWalletSymbol_Reducer
} from './user.reducer';

import { themeReducer } from './theme.reducer';

import { switchCoin } from './coin.reducer';


const rootReducer = combineReducers({
  mnemonicStr: getMnemonicStr_Reducer,
  token: getTokenStr_Reducer,
  user: getUserInfo_Reducer,
  listMoney: getAllWalletByAddress_Reducer,
  insertWallet: insertWalletSymbol_Reducer,
  theme: themeReducer,
  coins: switchCoin
});

export default rootReducer;
