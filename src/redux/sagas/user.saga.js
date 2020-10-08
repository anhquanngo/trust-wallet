import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

import {freshToken} from '../../services';

import { 
  GET_MNEMONIC_STR,
  MNEMONIC_RECEIVED,
  GET_TOKEN_STR,
  TOKEN_RECEIVED,
  GET_USER_INFO,
  USER_RECEIVED,
  GET_ALL_WALLET_BY_ADDRESS,
  WALLET_RECEIVED,
  INSERT_WALLET_SYMBOL,
  INSERT_WALLET_RECEIVED,
  FORGOT_ACCOUNT,

} from '../constants';

import {
  getMnemonicStr_Uri,
  getUserInfo_Uri,
  getAllWalletByAddress_Uri,
  insertWalletSymbol_Uri,
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
    yield put({type: MNEMONIC_RECEIVED, data: nmemonic});
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
    yield put({type: TOKEN_RECEIVED, data: res.data.token});
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
    // let {ListMoney} = res.data;
    user = {_id, AddressBip, PublicKey};
    yield put({type: USER_RECEIVED, data: user});
  }
}

export function* getUserInfo_ActionWatcher() {
  yield takeLatest(GET_USER_INFO, getUserInfo);
}

/**
 * Get Catagories Money
 */

function* getAllWalletByAddress(disp) {
  let res = yield axios.get(getAllWalletByAddress_Uri, {
    params: {
      address: disp.data,
    },
  });
  if (res.data.Item) {
    let lists = res.data.Item.recordsets[0];
    console.log(lists);
    yield put({type: WALLET_RECEIVED, data: lists});
  }
}

export function* getAllWalletByAddress_ActionWatcher() {
  yield takeLatest(GET_ALL_WALLET_BY_ADDRESS, getAllWalletByAddress);
}

/**
 * insert symbol to account
 */

function* insertWalletSymbol(disp) {
  let res = yield axios.get(insertWalletSymbol_Uri, {
    params: {
      ...disp.data
    }
  });
  console.log(res.data);
  yield put({type: INSERT_WALLET_RECEIVED, data: res.data});
}

export function* insertWalletSymbol_ActionWatcher() {
  yield takeLatest(INSERT_WALLET_SYMBOL, insertWalletSymbol)
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

  yield put({type: USER_RECEIVED, data: res.data});
}

export function* getForgotAccount_ActionWatcher() {
  yield takeLatest(FORGOT_ACCOUNT, getForgotAccount);
}
