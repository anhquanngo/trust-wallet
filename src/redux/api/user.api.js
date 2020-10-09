export const APP_SECRET_KEY = 'game@2020!#$%*+^&*())(*&^%$#@!';

export const baseUri = 'http://222.252.28.199:8080';

// export const baseUri = 'https://trust-wallet-demo.glitch.me/';

/**
 * Get 12 words response:
 */
export const getMnemonicStr_Uri = '/GetMNemonic';

/**
 * Get AuthenNmemonic response:
 * {
 *  Token:
 *  Status: true || fasle
 *  PublicKey:
 *  PrivateKey:
 *  Parent:
 *  MoneyDefault: BNB, BTC, ETH
 * }
 */
export const getUserInfo_Uri = '/AuthenNmemonic';

/**
 * Get Danh Muc Dong Tien
 */

export const getAllWalletByAddress_Uri = '/GetAllWalletByAddress';


/**
 * insert symbol to account
 */

 export const insertWalletSymbol_Uri = '/InsertWalletSymbol';

 /**
  * remove symbol from account
  */
 export const removeSymbolInWallit = 'RemoveSymbolInWallit'

/**
 * get current balance eth
 */
export const getCurrentBalanceEth_Uri = '/GetCurrentBalanceETH';
 /**
 * Recover account
 */

export const getForgotAccount_Uri = '/forgotaccount';
