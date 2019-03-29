import request from '../../utils/request.js'

export function queryAllIssues() {
    return request({
        url: "/repos/TrumanGu/TrumanGu/issues",
        method: 'get'
    })
}

export function queryIssues(number) {
    return request({
        url: `repos/eyasliu/blog/issues/${number}`,
        method: 'get',
    })
}