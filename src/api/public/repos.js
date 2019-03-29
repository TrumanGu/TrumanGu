import request from '../../utils/request.js'

/**
 * query all the issues from github repos
 */
export function queryAllIssues() {
    return request({
        url: "/repos/TrumanGu/TrumanGu/issues",
        method: 'get'
    })
}

/**
 * 
 * @param {Number} number
 * query issue content by issue_number 
 */

export function queryIssues(number) {
    return request({
        url: `repos/TrumanGu/TrumanGu/issues/${number}`,
        method: 'get',
    })
}

/**
 * query github repo labels
 */
export function queryLabels() {
    return request({
        url: 'repos/TrumanGu/TrumanGu/labels',
        method: 'get',
    })
}