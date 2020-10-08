import {
  GET_MNEMONIC_STR,
  GET_TOKEN_STR,
  GET_USER_INFO,
  GET_ALL_WALLET_BY_ADDRESS,
  FORGOT_ACCOUNT,
  INSERT_WALLET_SYMBOL
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

export const getAllWalletByAddress = (data) => ({
  type: GET_ALL_WALLET_BY_ADDRESS,
  data: data,
});

export const insertWalletSymbol = (data) => {
  console.log(data);
  return ({
    type: INSERT_WALLET_SYMBOL,
    data: data
  })
}

export const getForgotAccount = (data) => ({
  type: FORGOT_ACCOUNT,
  data: data,
});

