import { GET_MNEMONIC_STR, GET_FULL_KEY, GET_CATAGORIES_MONEY, FORGOT_ACCOUNT, DATA_RECEIVED } from '../constants';


export const getMnemonicStr_Reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MNEMONIC_STR: return state;
    case DATA_RECEIVED: return action.data;
    default: return state;
  }
}

export const getFullKey_Reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_FULL_KEY: return state;
    case FORGOT_ACCOUNT: return state;
    case DATA_RECEIVED: return action.data;
    default: return state;
  }
}

export const getCatagoriesMoney_Reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATAGORIES_MONEY: return state;
    case DATA_RECEIVED: return action.data;
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