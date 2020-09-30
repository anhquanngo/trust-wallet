import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

import { USER_LOGIN, USER_RECEIVED } from '../constants';

import {
    createUserUri,
    loginUserUri,
    getUserUri,
  } from '../configs/url.config';


//get user
function* userLogin(disp) {
  let res = yield axios.get(getUserUri, {
      params: {
          id: disp.data
      }
  });
  yield put({type: USER_RECEIVED, data: res.data});
}

export function* userLoginActionWatcher() {
  yield takeLatest(USER_LOGIN, getUser);
}