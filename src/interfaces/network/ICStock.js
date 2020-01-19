import {getWithRedux} from './Fetch';

const STOCK_LIST_URL = 'http://web.juhe.cn:8080/finance/stock/szall?';

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
