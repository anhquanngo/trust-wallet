import {SWITCH_COIN, COIN_CHANGED} from '../constants';
import {coinList} from '../../configs';

export const switchCoin = (state = coinList, action) => {
  switch (action.type) {
    case SWITCH_COIN: {
      return state.map((item) => {
        if (item.Name == action.data.Name) {
          item.active = action.data.active;
          console.log(item);
          return item;
        }
        return item;
      });
    }
    case COIN_CHANGED:
      return state;
    default:
      return state;
  }
};
