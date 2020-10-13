import { CREATE_QRCODE, QRCODE_RECEIVED } from '../constants';

export const qrcodeReducer = (state = "", action) => {
    switch (action.type) {
        case CREATE_QRCODE: return state;
        case QRCODE_RECEIVED: return action.data;
        default: return state;
    }
}