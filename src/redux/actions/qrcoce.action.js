import { CREATE_QRCODE} from '../constants';

export const qrcodeCreate = (data) => ({
    type: CREATE_QRCODE,
    data: data
});