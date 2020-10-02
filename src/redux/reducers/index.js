import {combineReducers} from 'redux';

import {
  getMnemonicStr_Reducer,
  getFullKey_Reducer,
  getCatagoriesMoney_Reducer,
} from './user.reducer';

const rootReducer = combineReducers({
  mnemonicStr: getMnemonicStr_Reducer,
  user: getFullKey_Reducer,
  catagories: getCatagoriesMoney_Reducer,
});

export default rootReducer;
