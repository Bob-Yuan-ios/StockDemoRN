
const STOCK_APP_KEY = 'bab18498ce6a97b81a5cdaabbf55bb12';

const NEWS_APP_KEY = 'dae12e801c2d9e563930b78a3ce78546';

const TIMEOUT = 1500;

/*    ************************  直接数据请求 ****************************
 *    1、数据不需要复用
 *    2、数据处理逻辑简单
 *    3、View数据来源单一　
 *    4、主动获取数据更新
 *    **************************************************************** */
export const get = async (url: string) => {
    let fetchUrl = url + '&key=' + NEWS_APP_KEY;
    console.log('fetchUrl...:' + fetchUrl);
    return _fetch(fetchPromise('GET', fetchUrl), TIMEOUT).then((resJson)=>{
        console.log('success:' + JSON.stringify(resJson));
        if (!resJson.resultcode){
            return {
                status: -1,
                object: resJson.reason
            };
        } else {
            return {
                status: 0,
                object: resJson.result.data
            };
        }

    }).catch((e)=>{
        // 可以根据异常定义对应的逻辑
        console.log('error information:' + JSON.stringify(e));
        return {
            status: -2,
            object: '请求出错...'
        }
    });
}

export const post = async (url: string, body: object) => {
    return _fetch(fetchPromise('POST', url, body), TIMEOUT).then((resJson)=>{
        return resJson;
    }).catch((e)=>{
        console.error('error:' + JSON.stringify(e));
    });
}


/*    *******************  使用Redux进行数据请求 ***********************
 *    1、数据需要复用
 *    2、数据处理逻辑复杂
 *    3、View数据来源多个　
 *    4、被动数据更新
 *    **************************************************************** */
export const getWithRedux = async (url: string) => {

    const fetchUrl = url + '&key=' + STOCK_APP_KEY;
    return _fetch(fetchPromise('GET', fetchUrl), TIMEOUT);
}

export const postWithRedux = async (url: string, body: object) => {

    // try {
    //
    //     let response = await fetch(
    //         url,
    //         {
    //             method: 'POST',
    //             headers: {
    //                 'Content-Type': 'application/x-www-form-urlencoded',
    //             },
    //             body: body, //字符串拼接格式 'key1=value1&key2=value2',
    // Object.defineProperty(requestConfig, 'body', {
    //     value: JSON.stringify(data)
    // })
    //         }
    //     );
    //
    //
    //     let resJson = await response.json();
    //
    //     /*  *********************
    //      *   可根据状态码做统一处理
    //      *  *********************/
    //     return resJson;
    // }catch (e) {
    //     console.log('error information...' + JSON.stringify(e));
    // }
}


// 对fetch做超时封装
const _fetch = (fetchPromise, timeout) => {
    return Promise.race([fetchPromise, timeOutPromise(timeout)]);
}


const fetchPromise = (method, url, body) => {
    return new Promise((resolve, reject) => {
        fetch(url, {
            method: method,
            body: body
        }).then((response) => {
            return response.json();
        }).then((responseJson) => {
            resolve(responseJson);
        }).catch((err) => {
            reject(new Error(err));
        })
    })
}


const timeOutPromise = (timeout = 1500) => {
    return new  Promise((resolve, reject) => {
        setTimeout(() => {
            reject('time out...');
        }, timeout);
    });
}
