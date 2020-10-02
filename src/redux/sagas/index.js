import {all} from 'redux-saga/effects';

import {
  getMnemonicStr_ActionWatcher,
  getFullKey_ActionWatcher,
  getCatagoriesMoney_ActionWatcher,
  getForgotAccount_ActionWatcher,
} from './user.saga';

export default function* rootSaga() {
  yield all([
      getMnemonicStr_ActionWatcher(),
      getFullKey_ActionWatcher(),
      getCatagoriesMoney_ActionWatcher(),
      getForgotAccount_ActionWatcher()
  ]);
}
