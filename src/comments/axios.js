import JsonP from 'jsonp'

export default class AxiosApi {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, (err, rsp) => {
                if (rsp) {
                    console.log('请求status：', rsp.status, '\n请求message：', rsp.message);
                    if (rsp.status === 'success') resolve(rsp);
                    else reject(rsp.message);
                }
            })
        })
    }
}