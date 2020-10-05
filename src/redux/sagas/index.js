import {all} from 'redux-saga/effects';

import {
  getMnemonicStr_ActionWatcher,
  getFullKey_ActionWatcher,
  getCatagoriesMoney_ActionWatcher,
  getForgotAccount_ActionWatcher,
} from './user.saga';

import {
  switchTheme_ActionWatcher
} from './theme.saga';

export default function* rootSaga() {
  yield all([
      getMnemonicStr_ActionWatcher(),
      getFullKey_ActionWatcher(),
      getCatagoriesMoney_ActionWatcher(),
      getForgotAccount_ActionWatcher(),
      switchTheme_ActionWatcher()
  ]);
}
