export const baseUri = 'https://5f6852b7dc0bff0016f433bf.mockapi.io/api/mapi';

/**
 * Get 12 words response:
 * {
 *  Token:
 *  MnemonicStr:
 * }
 */
export const getMnemonicStr_Uri = '/mnemoic';

/**
 * Get Full Key response:
 * {
 *  Token:
 *  Status: true || fasle
 *  PublicKey:
 *  PrivateKey:
 *  Parent:
 *  MoneyDefault: BNB, BTC, ETH
 * }
 */
export const getFullKey_Uri = '/getfullkey';

/**
 * Get Danh Muc Dong Tien
 */

export const getCatagoriesMoney_Uri = '/catagoriesmoney';

/**
 * Recover account
 */

export const getForgotAccount_Uri = '/forgotaccount';
