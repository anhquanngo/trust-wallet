import { SWITCH_COIN, SENDETH } from '../constants';

export const switchCoin = (data) => ({
    type: SWITCH_COIN,
    data: data
})

export const sendETH = (data) => ({
    type: SENDETH,
    data: data
})