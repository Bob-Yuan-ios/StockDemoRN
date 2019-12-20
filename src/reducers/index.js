import {combineReducers} from 'redux';

import stockList from './Stock';

const rootReducer = combineReducers({
  stockList,
});

export default rootReducer;
