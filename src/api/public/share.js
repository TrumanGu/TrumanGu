import request from '../../utils/request'

/**
 * query all the share link 
 */
export function queryAllShares() {
    return request({
        url: `/api/public/shares`,
        method: 'get',
    })
}