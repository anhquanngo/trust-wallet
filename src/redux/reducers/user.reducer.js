import { USER_LOGIN, USER_RECEIVED } from '../constants';

export const userLogin = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return state;
    case USER_RECEIVED:
      return action.data;
    default:
      return state;
  }
};
