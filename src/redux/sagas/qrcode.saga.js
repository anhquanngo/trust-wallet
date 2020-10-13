import axios from 'axios';
import {put, takeLatest} from 'redux-saga/effects';

import { CREATE_QRCODE, QRCODE_RECEIVED } from '../constants';

function* qrcodeCreate(disp) {
    console.log(disp);
    let res = yield axios.get('https://trust-wallet-demo.glitch.me/qrcode', {
        params: {
            data: disp.data
        }
    })
    
    if (res.data) {
        yield put({type: QRCODE_RECEIVED, data: res.data});
    }
}

export function* qrcodeCreate_ActionWatcher() {
    yield takeLatest(CREATE_QRCODE, qrcodeCreate);
}