
import  { get } from "./Fetch";

const GET_NEWS_LIST_URL = 'http://v.juhe.cn/toutiao/index?';

export const getNewsList = async (type: string) => {
    try {
        const  resJson = await get(GET_NEWS_LIST_URL + 'type=' + type);
        console.log('net interface getNewsList:' + JSON.stringify(resJson));

        return resJson;
    }catch (e) {
      console.log('error message:' + JSON.stringify(e));
    }

}
