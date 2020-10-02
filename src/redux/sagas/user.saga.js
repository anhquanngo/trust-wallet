import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

import {
  GET_MNEMONIC_STR,
  GET_FULL_KEY,
  GET_CATAGORIES_MONEY,
  DATA_RECEIVED,
  FORGOT_ACCOUNT,
} from '../constants';

import {
  getMnemonicStr_Uri,
  getFullKey_Uri,
  getCatagoriesMoney_Uri,
  getForgotAccount_Uri,
} from '../api';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

/**
 * Get Mnemonic String - 12 words
 * response: 
 * {
 *  Token:
 *  MnemonicStr:
 * }
 */
function* getMnemonicStr(disp) {
  
  let res = yield axios.get(getMnemonicStr_Uri);
  yield put({type: DATA_RECEIVED, data: res.data});

}

export function* getMnemonicStr_ActionWatcher() {
  yield takeLatest(GET_MNEMONIC_STR, getMnemonicStr);
}


/**
 * Get FullKey
 */

function* getFullKey(disp) {
  
  let res = yield axios.get(getFullKey_Uri, {
    params: {
      token:  disp.token,
      mnemonicStr: disp.mnemonicStr
    }
  });

  yield put({type: DATA_RECEIVED, data: res.data});

}

export function* getFullKey_ActionWatcher() {
  yield takeLatest(GET_FULL_KEY, getFullKey)
}

/**
 * Get Catagories Money
 */

function* getCatagoriesMoney(disp) {

  let res = yield axios.get(getCatagoriesMoney_Uri, {
    params: {
      privateKey: disp.privateKey,
      token: disp.token
    }
  });

  yield put({ type: DATA_RECEIVED, data: res.data})

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
        privateKey: disp.privateKey
      }
    });

    yield put({ type: DATA_RECEIVED, data: res.data})

 }

export function* getForgotAccount_ActionWatcher() {
   yield takeLatest(FORGOT_ACCOUNT, getForgotAccount);
 }