

const APPKEY = 'bab18498ce6a97b81a5cdaabbf55bb12';

export const getMethod = async function post(url) {

    try {

        const fetchUrl = url + '&key=' + APPKEY;

        let response = await fetch(fetchUrl);
        let resJson = await response.json();

        /*  *********************
         *   可根据状态码做统一处理
         *  *********************/
        return resJson;
    }catch (e) {
        console.log('error information...' + JSON.stringify(e));
    }
}

export const postMethod = async function post(url, body) {

    try {

        let response = await fetch(
            url,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: body, //字符串拼接格式 'key1=value1&key2=value2',
            }
        );


        let resJson = await response.json();

        /*  *********************
         *   可根据状态码做统一处理
         *  *********************/
        return resJson;
    }catch (e) {
        console.log('error information...' + JSON.stringify(e));
    }
}
