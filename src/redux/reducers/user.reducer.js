import { 
  GET_MNEMONIC_STR,
  GET_TOKEN_STR,  
  GET_USER_INFO,
  GET_CATAGORIES_MONEY,
  FORGOT_ACCOUNT,
  DATA_RECEIVED } from '../constants';


export const getMnemonicStr_Reducer = (state = "", action) => {
  switch (action.type) {
    case GET_MNEMONIC_STR: return state;
    case DATA_RECEIVED: return action.data;
    default: return state;
  }
}

export const getTokenStr_Reducer = (state = "", action) => {
  switch (action.type) {
    case GET_TOKEN_STR: return state;
    case DATA_RECEIVED: return action.data;
    default: return state;
  }
}

export const getUserInfo_Reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_INFO: return state;
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