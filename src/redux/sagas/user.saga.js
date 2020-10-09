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
  GET_CURRENT_BALANCE_ETH,
  CURRENT_BALANCE_ETH_RECEIVED,
  FORGOT_ACCOUNT,
} from '../constants';

import {
  getMnemonicStr_Uri,
  getUserInfo_Uri,
  getAllWalletByAddress_Uri,
  insertWalletSymbol_Uri,
  getForgotAccount_Uri,
  getCurrentBalanceEth_Uri,
} from '../api';

/**
 * Get Mnemonic String - 12 words
 * }
 */
function* getMnemonicStr(disp) {
  let res = yield axios.get(getMnemonicStr_Uri);
  if (res.data.Item) {
    let nmemonic = res.data.Item.Nmemonic;
    let token = res.data.token;
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    yield put({type: MNEMONIC_RECEIVED, data: nmemonic});
    yield put({type: TOKEN_RECEIVED, data: token})
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
  // yield freshToken();
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
  // yield freshToken();
  let res = yield axios.get(getAllWalletByAddress_Uri, {
    params: {
      address: disp.data,
    },
  });
  if (res.data.Item) {
    let lists = res.data.Item.recordsets[0];
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
  // console.log({...disp.data});
  // let token = yield freshToken();
  // console.log(token);
  let res = yield axios.post(insertWalletSymbol_Uri, null, {
    params: {
      ...disp.data
    },
  });
  // console.log(res);
  yield put({type: INSERT_WALLET_RECEIVED, data: res.data});
}

export function* insertWalletSymbol_ActionWatcher() {
  yield takeLatest(INSERT_WALLET_SYMBOL, insertWalletSymbol);
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

function* getCurrentBalanceEth(disp) {
  let res = yield axios.get(getCurrentBalanceEth_Uri, {
    params: {
      addres: disp.data,
    },
  });

  yield put({type: CURRENT_BALANCE_ETH_RECEIVED, data: '0.05'});
}

export function* getCurrentBalanceEth_ActionWatcher() {
  yield takeLatest(GET_CURRENT_BALANCE_ETH, getCurrentBalanceEth);
}
