import {SWITCH_COIN, COIN_CHANGED, SENDETH, SENDETH_RECEVED} from '../constants';
import {coinList} from '../../configs';

export const switchCoin = (state = coinList, action) => {
  switch (action.type) {
    case SWITCH_COIN:
      return state;
    case COIN_CHANGED:
      return state.map((item) => {
        if (item.Name == action.data.name) {
          item.active = action.data.active;
          return item;
        }
        return item;
      });

    default:
      return state;
  }
};

export const sendETH_Reducer = (state = null, action) => {
  switch (action.type) {
    case SENDETH: return state;
    case SENDETH_RECEVED: return action.data;
    default: return state;
  }
}