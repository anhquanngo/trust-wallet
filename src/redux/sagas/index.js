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

import { switchCoin_ActionWatcher, sendETH_ActionWatcher, historyTransaction_ActionWatcher } from './coin.saga';

import { qrcodeCreate_ActionWatcher } from './qrcode.saga';

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
      sendETH_ActionWatcher(),
      qrcodeCreate_ActionWatcher(),
      historyTransaction_ActionWatcher()
  ]);
}
