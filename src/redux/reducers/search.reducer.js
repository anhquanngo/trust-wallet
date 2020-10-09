import {SEARCH_INPUT} from '../constants';

export const searchReducer = (state = "", action) => {
  switch (action.type) {
    case SEARCH_INPUT:
      return action.data;
    default: return state;
  }
};
