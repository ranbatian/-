import JsonP from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'
export default class Axios {


    static jsonp(options) {
        return new Promise((resolve, reject) => {
            JsonP(options.url, {
                param: 'callback'
            }, function (err, response) {
                if (response.status == 'success') {
                    resolve(response);
                } else {
                    reject(response.messsage);
                }
            })
        })
    }

    static ajax(options) {
        return new Promise((reslove, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: 'https://www.fastmock.site/mock/dce21ad53bc3a1e796946e16971334a9/test',
                timeout: 5000,
                params: (options.data && options.data.param) || ''
            }).then(response => {
                if (response.status == '200') {
                    let res = response.data
                    if (res.code == '0') {
                        reslove(res.result)
                    } else {
                        Modal.info(
                            { title: '提示', content: '没有授权访问，code：0' }
                        )
                    }
                } else {
                    reject(response.data)
                }
            })

        })
    }
}