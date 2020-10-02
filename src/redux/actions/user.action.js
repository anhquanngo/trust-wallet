import {
  GET_MNEMONIC_STR,
  GET_FULL_KEY,
  GET_CATAGORIES_MONEY,
  FORGOT_ACCOUNT,
} from '../constants';

export const getMnemonicStr = (data) => ({
  type: GET_MNEMONIC_STR,
  data: data,
});

export const getFullKey = (data) => ({
  type: GET_FULL_KEY,
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
