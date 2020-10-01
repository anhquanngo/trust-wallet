import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { USER_LOGIN, USER_RECEIVED } from '../constants';

import { getToken } from '../api';


//get user
function* userLogin(disp) {
  let res = yield axios.get(getToken, {
      params: {
          id: disp.data
      }
  });
  yield put({type: USER_RECEIVED, data: res.data});
}

export function* userLoginActionWatcher() {
  yield takeLatest(USER_LOGIN, userLogin);
}