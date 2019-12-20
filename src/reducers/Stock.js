/* eslint-disable no-undef */
import {UPDATE_STOCK_LIST} from '../actions/Stock';

const defaultState = [];

export default (stockList = (state = defaultState, action) => {
  switch (action.type) {
    case UPDATE_STOCK_LIST: {
      return {
        symbol: action.info || [],
      };
    }
    default:
      return defaultState;
  }
});
