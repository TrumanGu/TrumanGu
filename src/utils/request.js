import axios from 'axios'
import {
    Message
} from 'iview'
import router from '../router'

const service = axios.create({
    // baseURL: process.env.NODE_ENV === 'development'? '':'',
    baseURL: 'https://api.github.com',
    timeout: 5000 // request timeout
})

// request interceptor
// service.interceptors.request.use(
//   config => {
//     // Do something before request is sent
//     if (localStorage.Authorization) {
//       config.headers = {
//         'Authorization': 'Bearer ' + getToken(),
//         'locale': localStorage.getItem('locale')
//       }
//     } else {
//       config.headers = {
//         'locale': localStorage.getItem('locale')
//       }
//     }

//     return config
//   },
//   error => {
//     Message({
//       showClose: true,
//       message: error && error.data.error.message,
//       type: 'error'
//     })
//     return Promise.reject(error)
//   }
// )

// response interceptor
service.interceptors.response.use(
    // response => response.data,
    /**
     * 下面的注释为通过在response里，自定义code来标示请求状态
     * 当code返回如下情况则说明权限有问题，登出并返回到登录页
     * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
     * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
     */
    res => {
        if (!res) {
            console.log('接口未返回')
            return Promise.reject(res.data)
        }

        if (res.status !== 200) {
            // console.log(res)
            console.log(res)
            Message.info({
                content: '出现错误，请检查接口',
                duration: 10,
                closable: true
            });
            return Promise.reject(res.data)
        }
        return res.data
    },
    error => {
        // 有token
        const res = error.response
        console.log(res)
        Message.info({
            content: '出现错误，请检查接口',
            duration: 10,
            closable: true
        });
        // // console.log(res)
        // // console.log(router)
        // if (res && res.status === 401) {
        //     Message({
        //         showClose: true,
        //         message: i18n.default.messages[localStorage.getItem('locale')]['loginNeeded'],
        //         type: 'error'
        //     })
        //     router.push({
        //         name: 'login'
        //     })
        //     return Promise.reject(res)
        // }

        // if (res && res.status === 403) {
        //     Message({
        //         showClose: true,
        //         // message: res.statusText + res.data.message,
        //         // message: res.statusText + res.data.message,
        //         message: i18n.default.messages[localStorage.getItem('locale')]['shitHappens'],
        //         type: 'error'
        //     })
        //     return Promise.reject(res)
        // }
        // if (res && res.status === 500) {
        //     Message({
        //         showClose: true,
        //         message: i18n.default.messages[localStorage.getItem('locale')]['shitHappens'],
        //         type: 'error'
        //     })
        //     return Promise.reject(res)
        // }

        // if (res && res.status === 404) {
        //     router.push({
        //         name: '404'
        //     })
        //     return Promise.reject(res)
        // }
        // if (res && res.status === 429) {
        //     Message({
        //         message: i18n.default.messages[localStorage.getItem('locale')]['toManReqs'],
        //         type: 'error',
        //         duration: 5 * 1000
        //     })
        //     return Promise.reject(res)
        // }
    }
)

export default service