import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

import {SWITCH_THEME, LIGHT_THEME, DARK_THEME} from '../constants';

function* switchTheme(disp) {
  if (disp.data == LIGHT_THEME) {
    yield put({type: LIGHT_THEME});
  }
  if (disp.data == DARK_THEME) {
    yield put({type: DARK_THEME});
  }
}

export function* switchTheme_ActionWatcher() {
  yield takeLatest(SWITCH_THEME, switchTheme);
}
