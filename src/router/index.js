import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

export const constantRouterMap = [{
    path: '/',
    component: () =>
        import('@/views/layout'),
    children: [{
        path: '/',
        name: 'index',
        meta: 'index',
        components: {
            default: () =>
                import('@/views/index/index'),
            background: () =>
                import('@/components/backgroundContainer')
        },
        children: [{
            path: '/',
            name: 'article-list',
            component: () =>
                import('@/components/center')
        }, {
            path: '/article/:id',
            name: 'article-detail',
            component: () =>
                import('@/components/articleDetail')
        },
        {
            path: '/time-line',
            name: 'time-line',
            meta: {
                'center_title': "时光轴",
                "top_title": "时光轴"
            },
            component: () =>
                import('@/components/timeLine')
        }, {
            path: '/friends',
            name: 'friends',
            meta: {
                'center_title': "我的朋友们",
                "top_title": "我的朋友们"
            },
            component: () =>
                import('@/components/articleDetail')
        },
        {
            path: '/about-me',
            name: 'about-me',
            meta: {
                'center_title': "关于我",
                "top_title": "关于我"
            },
            component: () =>
                import('@/components/aboutMe')
        },
        ]
    },
        // 导航栏开始
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
}, {
    path: '/live',
    component: () => import('@/views/layout'),
    children: [{
        path: '',
        component: () => import('@/views/live')
    }]
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