import { 
    SWITCH_COIN,
    SENDETH,
    HISTORY_TRANSACTION,
} from '../constants';

export const switchCoin = (data) => ({
    type: SWITCH_COIN,
    data: data
})

export const sendETH = (data) => ({
    type: SENDETH,
    data: data
})

export const historyTransaction = (data) => ({
    type: HISTORY_TRANSACTION,
    data: data
})