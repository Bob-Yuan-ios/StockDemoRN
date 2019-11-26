import { getMethod } from './Fetch';

import {updateStockList} from '../../actions/Stock';

import configureStore from '../../store/index'

const STOCK_LIST_URL = 'http://web.juhe.cn:8080/finance/stock/szall?';

export const getStockList = (pageNum: string) => dispatch => async function stockList() {

    const url = STOCK_LIST_URL + 'page=' + pageNum;

    let resJson = await getMethod(url);
    resJson = resJson.result.data;

    let symbol = [];

    if (1 === pageNum){
        symbol = resJson;
    }else {
        let oStockList = global.AppReduxState.getState().stockList.symbol;

        if ((oStockList instanceof Array)){
            console.log('....ffffff');
            symbol = oStockList.concat(resJson);
        } else {
            symbol = resJson;
            console.log('oStockList...' + JSON.stringify(oStockList));
        }
    }

    return dispatch(dispatch(updateStockList(symbol)));
}
