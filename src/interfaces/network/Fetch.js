

const APPKEY = 'bab18498ce6a97b81a5cdaabbf55bb12';
const TIMEOUT = 1500;

export const get = async function getF(url: string) {
    return _fetch(fetchPromise('GET', url), TIMEOUT).then((resJson)=>{
        return resJson;
    }).catch((e)=>{
        console.error('error:' + JSON.stringify(e));
    });
}

export const post = async function postF(url: string, body: object) {
    return _fetch(fetchPromise('POST', url, body), TIMEOUT).then((resJson)=>{
        return resJson;
    }).catch((e)=>{
        console.error('error:' + JSON.stringify(e));
    });
}

export const getWithRedux = async function getRF(url: string) {

    const fetchUrl = url + '&key=' + APPKEY;
    return _fetch(fetchPromise('GET', fetchUrl), TIMEOUT);
}

export const postWithRedux = async function postRF(url: string, body: object) {

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
