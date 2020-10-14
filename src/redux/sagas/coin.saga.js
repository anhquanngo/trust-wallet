import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

import {
  SWITCH_COIN,
  COIN_CHANGED,
  SENDETH_RECEVED,
  SENDETH,
} from '../constants';
import {insertWalletSymbol_Uri, removeSymbolInWallit, sendETH_Uri} from '../api';

function* switchCoin(disp) {
  // console.log(disp);
  if (disp.data.active) {
    let res = yield axios.post(insertWalletSymbol_Uri, null, {
      params: {
        ...disp.data,
      },
    });
    // console.log(res);
    if (res.data.StatusCode == 200) {
      yield put({type: COIN_CHANGED, data: disp.data});
    }
  } else {
    let res = yield axios.post(removeSymbolInWallit, null, {
      params: {
        ...disp.data,
      },
    });
    // console.log(res);
    if (res.data.StatusCode == 200) {
      yield put({type: COIN_CHANGED, data: disp.data});
    }
  }
}

export function* switchCoin_ActionWatcher() {
  yield takeLatest(SWITCH_COIN, switchCoin);
}

/**
 * post{
 * fromAddress
	toAddress
	gasPrice: 210000000000
	gasLimit: 42000
    value
}
 */

function* sendETH(disp) {
  let res = yield axios.post(sendETH_Uri, null, {
    params: {
      ...disp.data,
    },
  });
  if (res.data.StatusCode == 200 && res.data.Item) {
    yield put({type: SENDETH_RECEVED, data: 'Gửi thành công!'});
  } else {
    yield put({type: SENDETH_RECEVED, data: 'Gửi thất bại!'});
  }
}

export function* sendETH_ActionWatcher() {
  yield takeLatest(SENDETH, sendETH);
}
