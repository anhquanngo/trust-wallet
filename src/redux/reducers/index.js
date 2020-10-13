import {combineReducers} from 'redux';

import {
  getMnemonicStr_Reducer,
  getTokenStr_Reducer,
  getUserInfo_Reducer,
  getAllWalletByAddress_Reducer,
  getCurrenBalanceEth_Reducer,
  addAddress_Reducer,
} from './user.reducer';

import {themeReducer} from './theme.reducer';

import {switchCoin, sendETH_Reducer} from './coin.reducer';

import {searchReducer} from './search.reducer';

import { qrcodeReducer } from './qrcode.reducer';

const rootReducer = combineReducers({
  mnemonicStr: getMnemonicStr_Reducer,
  token: getTokenStr_Reducer,
  user: getUserInfo_Reducer,
  listMoney: getAllWalletByAddress_Reducer,
  theme: themeReducer,
  coins: switchCoin,
  search: searchReducer,
  balance: getCurrenBalanceEth_Reducer,
  sendETH: sendETH_Reducer,
  listAddress: addAddress_Reducer,
  qrcode: qrcodeReducer
});

export default rootReducer;
