import {
  GET_MNEMONIC_STR,
  GET_TOKEN_STR,
  GET_USER_INFO,
  GET_CATAGORIES_MONEY,
  FORGOT_ACCOUNT,
} from '../constants';

export const getMnemonicStr = (data) => ({
  type: GET_MNEMONIC_STR,
  data: data,
});

export const getTokenStr = (data) => ({
  type: GET_TOKEN_STR,
  data: data
})

export const getUserInfo = (data) => ({
  type: GET_USER_INFO,
  data: data,
});

export const getCatagoriesMoney = (data) => ({
  type: GET_CATAGORIES_MONEY,
  data: data,
});

export const getForgotAccount = (data) => ({
  type: FORGOT_ACCOUNT,
  data: data,
});
