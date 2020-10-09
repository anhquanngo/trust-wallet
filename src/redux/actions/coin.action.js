import { SWITCH_COIN } from '../constants';

export const switchCoin = (data) => ({
    type: SWITCH_COIN,
    data: data
})