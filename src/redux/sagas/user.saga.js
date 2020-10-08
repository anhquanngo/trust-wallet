import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

import {freshToken} from '../../services';

import {
  GET_MNEMONIC_STR,
  GET_TOKEN_STR,
  GET_USER_INFO,
  GET_CATAGORIES_MONEY,
  DATA_RECEIVED,
  FORGOT_ACCOUNT,
} from '../constants';

import {
  getMnemonicStr_Uri,
  getUserInfo_Uri,
  getCatagoriesMoney_Uri,
  getForgotAccount_Uri,
} from '../api';

/**
 * Get Mnemonic String - 12 words
 * }
 */
function* getMnemonicStr(disp) {
  let res = yield axios.get(getMnemonicStr_Uri);
  if (res.data.Item) {
    let nmemonic = res.data.Item.Nmemonic;
    yield put({type: DATA_RECEIVED, data: nmemonic});
  }
}

export function* getMnemonicStr_ActionWatcher() {
  yield takeLatest(GET_MNEMONIC_STR, getMnemonicStr);
}

/**
 * Get Token
 */
function* getTokenStr(disp) {
  let res = yield axios.get(getMnemonicStr_Uri);
  if (res.data.token) {
    yield put({type: DATA_RECEIVED, data: res.data.token});
  }
}

export function* getTokenStr_ActionWatcher() {
  yield takeLatest(GET_TOKEN_STR, getTokenStr);
}

/**
 * Get FullKey
 */

function* getUserInfo(disp) {
  yield freshToken();
  let res = yield axios.get(getUserInfo_Uri);
  let user;
  if (res.data.Item) {
    let {_id, AddressBip, PublicKey} = res.data.Item.recordsets[0][0];
    let {ListMoney} = res.data;
    user = {_id, AddressBip, PublicKey, ListMoney};
    yield put({type: DATA_RECEIVED, data: user});
  }
}

export function* getUserInfo_ActionWatcher() {
  yield takeLatest(GET_USER_INFO, getUserInfo);
}

/**
 * Get Catagories Money
 */

function* getCatagoriesMoney(disp) {
  let res = yield axios.get(getCatagoriesMoney_Uri, {
    params: {
      privateKey: disp.privateKey,
      token: disp.token,
    },
  });

  yield put({type: DATA_RECEIVED, data: res.data});
}

export function* getCatagoriesMoney_ActionWatcher() {
  yield takeLatest(GET_CATAGORIES_MONEY, getCatagoriesMoney);
}

/**
 * Forgot Account
 */

function* getForgotAccount(disp) {
  let res = yield axios.get(getForgotAccount_Uri, {
    params: {
      privateKey: disp.privateKey,
    },
  });

  yield put({type: DATA_RECEIVED, data: res.data});
}

export function* getForgotAccount_ActionWatcher() {
  yield takeLatest(FORGOT_ACCOUNT, getForgotAccount);
}
