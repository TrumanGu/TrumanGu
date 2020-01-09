import request from '../../utils/request'

/**
 * query all the article 
 */
export function queryAllArticles(page) {
    return request({
        url: `/api/public/article?page=${page}&size=${10}`,
        method: 'get',
    })
}



export function queryArticle(id) {
    return request({
        url: "/api/public/article/" + id,
        method: 'get'
    })
}