import {all} from 'redux-saga/effects';

import {
  getMnemonicStr_ActionWatcher,
  getTokenStr_ActionWatcher,
  getUserInfo_ActionWatcher,
  getAllWalletByAddress_ActionWatcher,
  getForgotAccount_ActionWatcher,
  getCurrentBalanceEth_ActionWatcher
} from './user.saga';

import {
  switchTheme_ActionWatcher
} from './theme.saga';

import { switchCoin_ActionWatcher, sendETH_ActionWatcher } from './coin.saga';

export default function* rootSaga() {
  yield all([
      getMnemonicStr_ActionWatcher(),
      getTokenStr_ActionWatcher(),
      getUserInfo_ActionWatcher(),
      getAllWalletByAddress_ActionWatcher(),
      getForgotAccount_ActionWatcher(),
      getCurrentBalanceEth_ActionWatcher(),
      switchTheme_ActionWatcher(),
      switchCoin_ActionWatcher(),
      sendETH_ActionWatcher()
  ]);
}
