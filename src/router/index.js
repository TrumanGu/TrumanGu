import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const constantRouterMap = [{
        path: '/',
        component: () =>
            import ('@/views/layout'),
        children: [{
                path: '/',
                name: 'index',
                meta: 'index',
                components: {
                    default: () =>
                        import ('@/views/index/index'),
                    background: () =>
                        import ('@/components/backgroundContainer')
                },
                children: [{
                    path: '/',
                    name: 'article-list',
                    component: () =>
                        import ('@/components/center')
                }, {
                    path: '/article/:id',
                    name: 'article-detail',
                    component: () =>
                        import ('@/components/articleDetail')
                }, ]
            },
            // 导航栏开始
            {
                path: '/timeline',
                name: 'timeline',
                component: () =>
                    import ('@/components/articleDetail')
            },
            {
                path: '/design',
                name: 'design',
                component: () =>
                    import ('@/components/articleDetail')
            },
            {
                path: '/friends',
                name: 'friends',
                component: () =>
                    import ('@/components/articleDetail')
            },
            {
                path: '/about',
                name: 'about',
                component: () =>
                    import ('@/components/articleDetail')
            },
            // 导航栏结束
            // {
            //   path: '/article/:id',
            //   name: 'article-detail',
            //   component: () => import('@/components/articleDetail')
            // },
            // {
            //   //Archives
            //   path: 'Archives',
            //   name: 'article-detailsss',
            //   component: () => import('@/views/components/center')
            // },
            // {
            //   //Categories
            //   path: 'Categories',
            //   name: 'article-detailasd',
            //   component: () => import('@/views/index/components/left/links')
            // },
            // {
            //   //Tags
            //   path: 'Tags',
            //   name: 'article-detailwqwqw',
            //   component: () => import('@/views/components/center')
            // },
            // {
            //   //About
            //   path: 'About',
            //   name: 'article-detailcassc',
            //   component: () => import('@/views/index/components/center')
            // },

        ]
    },
    {
        path: '*',
        redirect: '/',
        hidden: true
    }

]

const router = new VueRouter({
    mode: 'history',
    routes: constantRouterMap
})

export default router