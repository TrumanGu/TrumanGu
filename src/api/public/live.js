import request from '../../utils/request'

/**
 * query all the live link 
 */
export function getLiveSource() {
    return request({
        url: `/api/public/livesource`,
        method: 'get',
    })
}