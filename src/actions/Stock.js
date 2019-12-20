// 更新列表
export const UPDATE_STOCK_LIST = 'UPDATE_STOCK_LIST';

// 更新单条记录
export const UPDATE_STOCK_ITEM = 'UPDATE_STOCK_ITEM';

export const updateStockList = info => ({
  type: UPDATE_STOCK_LIST,
  info: info,
});
