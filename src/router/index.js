import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/views/layout'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@/views/index/index')
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }

]

const router = new VueRouter({
  routes: constantRouterMap
})

export default router