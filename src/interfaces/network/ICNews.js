
import  { get } from "./Fetch";

const GET_NEWS_LIST_URL = 'http://v.juhe.cn/toutiao/index?';

/*
类型,,top(头条，默认),shehui(社会),guonei(国内),guoji(国际),yule(娱乐),tiyu(体育)junshi(军事),keji(科技),caijing(财经),shishang(时尚)
    let data: Array = ['头条', '财经', '科技', '娱乐'];

 */
export const NEWS_LIST_TYPE_TOU_TIAO = 'top';

export const NEWS_LIST_TYPE_CAI_JING = 'caijing';

export const NEWS_LIST_TYPE_KE_JI = 'keji';

export const NEWS_LIST_TYPE_YU_LE = 'yule';

export const getNewsList = async (type: string) => {
    try {
        const resJson = await get(GET_NEWS_LIST_URL + 'type=' + type);
        return resJson;
    }catch (e) {
      console.log('error message:' + JSON.stringify(e));
    }

}
