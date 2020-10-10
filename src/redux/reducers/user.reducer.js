import { 
  GET_MNEMONIC_STR,
  MNEMONIC_RECEIVED,
  GET_TOKEN_STR,
  TOKEN_RECEIVED,
  GET_USER_INFO,
  USER_RECEIVED,
  GET_ALL_WALLET_BY_ADDRESS,
  WALLET_RECEIVED,
  INSERT_WALLET_SYMBOL,
  INSERT_WALLET_RECEIVED,
  FORGOT_ACCOUNT,
  GET_CURRENT_BALANCE_ETH,
  CURRENT_BALANCE_ETH_RECEIVED

} from '../constants';


export const getMnemonicStr_Reducer = (state = "", action) => {
  switch (action.type) {
    case GET_MNEMONIC_STR: return state;
    case MNEMONIC_RECEIVED: return action.data;
    default: return state;
  }
}

export const getTokenStr_Reducer = (state = "", action) => {
  switch (action.type) {
    case GET_TOKEN_STR: return state;
    case TOKEN_RECEIVED: return action.data;
    default: return state;
  }
}

export const getUserInfo_Reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_INFO: return state;
    case FORGOT_ACCOUNT: return state;
    case USER_RECEIVED: return action.data;
    default: return state;
  }
}

export const getAllWalletByAddress_Reducer = (state = [], action) => {
  switch (action.type) {
    case GET_ALL_WALLET_BY_ADDRESS: return state;
    case WALLET_RECEIVED: return action.data;
    default: return state;
  }
}



export const getCurrenBalanceEth_Reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CURRENT_BALANCE_ETH: return state;
    case CURRENT_BALANCE_ETH_RECEIVED: return action.data;
    default: return state;
  }
}

// export const getForgotAccount_Reducer = (state = {}, action) => {
//   switch (action.type) {
//     case FORGOT_ACCOUNT: return state;
//     case DATA_RECEIVED: return action.data;
//     default: return state;
//   }
// }