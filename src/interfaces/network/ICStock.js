import {getWithRedux} from './Fetch';

import {STOCK_LIST_URL} from '../../constants/env';

export const getStockList = async (pageNum: string) => {
  const url = STOCK_LIST_URL + 'page=' + pageNum;

  try {
    let resJson = await getWithRedux(url);
    resJson = resJson.result.data;
    console.log('resJson:' + JSON.stringify(resJson));

    let symbol = [];

    if (pageNum === 1) {
      symbol = resJson;
    } else {
      //获取当前store快照
      let oStockList = global.AppReduxState.getState().stockList.symbol;
      symbol =
        oStockList instanceof Array ? oStockList.concat(resJson) : resJson;
    }

    return symbol;
  } catch (e) {
    console.log('error message:' + JSON.stringify(e));
    return [];
  }
};
