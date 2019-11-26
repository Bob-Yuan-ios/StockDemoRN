import { getMethod } from './Fetch';

import {updateStockList} from '../../actions/Stock';

const STOCK_LIST_URL = 'http://web.juhe.cn:8080/finance/stock/szall?';

export const getStockList = (pageNum: string) => dispatch => async function stockList() {

    const url = STOCK_LIST_URL + 'page=' + pageNum;

    let resJson = await getMethod(url);
    resJson = resJson.result.data;

    let symbol = [];

    if (1 === pageNum){
        symbol = resJson;
    }else {
        //获取当前store快照
        let oStockList = global.AppReduxState.getState().stockList.symbol;
        symbol = (oStockList instanceof Array) ?  oStockList.concat(resJson) : resJson;
    }

    return dispatch(dispatch(updateStockList(symbol)));
}
