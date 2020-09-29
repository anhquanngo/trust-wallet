import { combineReducers } from 'redux';

import { userLogin } from './user.reducer';

const rootReducer = combineReducers({
    user: userLogin
});

export default rootReducer;