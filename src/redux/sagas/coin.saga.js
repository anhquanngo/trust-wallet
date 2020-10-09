import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

import {SWITCH_COIN, COIN_CHANGED} from '../constants';

function* switchCoin(disp) {
  // console.log(disp);
}

export function* switchCoin_ActionWatcher() {
  yield takeLatest(SWITCH_COIN, switchCoin);
}
