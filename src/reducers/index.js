import {combineReducers} from  'redux';

import account from './Account';
import stockList from './Stock';

const rootReducer = combineReducers({
    account,
    stockList,
});


export default rootReducer;
