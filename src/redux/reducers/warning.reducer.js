import { WALLET_RECEIVED } from '../constants';

export const warningReducer = (state = "", action) => {
    switch (action.type) {
        case WALLET_RECEIVED: return action.data;
        default: return state;
    }
}