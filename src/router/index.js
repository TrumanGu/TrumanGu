import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRouterMap = [{
    path: '/',
    component: () => import('@/views/layout'),
    children: [{
      path: '/',
      name: 'index',
      component: () => import('@/views/index/index'),
      children: [{
          path: '/',
          name: 'article-list',
          component: () => import('@/views/index/components/center/center')
        },
        {
          path: '/article/:id',
          name: 'article-detail',
          component: () => import('@/components/articleDetail')
        },
        {
          //Archives
          path: 'Archives',
          name: 'article-detailsss',
          component: () => import('@/views/index/components/center/center')
        },
        {
          //Categories
          path: 'Categories',
          name: 'article-detailasd',
          component: () => import('@/views/index/components/left/links')
        },
        {
          //Tags
          path: 'Tags',
          name: 'article-detailwqwqw',
          component: () => import('@/views/index/components/center/center')
        },
        {
          //About
          path: 'About',
          name: 'article-detailcassc',
          component: () => import('@/views/index/components/center/center')
        },
      ]
    }]
  },
  {
    path: '*',
    redirect: '/',
    hidden: true
  }

]

const router = new VueRouter({
  routes: constantRouterMap
})

export default router