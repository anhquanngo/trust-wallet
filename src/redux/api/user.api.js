export const APP_SECRET_KEY = 'game@2020!#$%*+^&*())(*&^%$#@!';

export const baseUri = 'http://222.252.28.199:8080';

// export const baseUri = 'https://polarized-spot-bath.glitch.me';

/**
 * Get 12 words response:
 * {
 *  Token:
 *  MnemonicStr:
 * }
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

export const getCatagoriesMoney_Uri = '/catagoriesmoney';

/**
 * Recover account
 */

export const getForgotAccount_Uri = '/forgotaccount';
