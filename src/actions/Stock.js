import {getStockList} from '../interfaces/network/ICStock';

// 更新列表
export const UPDATE_STOCK_LIST = 'UPDATE_STOCK_LIST';

const updateStockListSuccess = info => ({
  type: UPDATE_STOCK_LIST,
  info: info,
});

export const updateStockList = (pageNum: number) => async dispatch => {
  const res = await getStockList(pageNum);
  //补充类型判断
  let a = res instanceof Array ? res : [];
  return dispatch(updateStockListSuccess(a));
};
