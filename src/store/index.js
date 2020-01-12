import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        refreshFlag: 0,
        scrollY: 0,
        windowWidth: 0,
        windowHeight: 0,
        pageCenterTitle: "TrumanGu's Blog",     // 大图中央标题
        pageTopTitle: "TrumanGu's Blog"         // 页面头部标题

    },
    mutations: {
        HAS_REFRESHED(state, { refreshFlag }) {
            // console.log(refreshFlag)
            state.refreshFlag = refreshFlag
        },
        SCROLL(state, { scrollY }) {
            state.scrollY = scrollY
        },
        RESIZE(state, { windowWidth, windowHeight }) {
            state.windowHeight = windowHeight
            state.windowWidth = windowWidth
        },
        SET_PAGE_CENTER(state, title) {
            state.pageCenterTitle = title
        },
        SET_PAGE_TOP(state, title) {
            state.pageTopTitle = title
        }
    },
    actions: {
        setPageTitle({ commit, state }, router) {
            const center_title = router.meta['center_title']
            const top_title = router.meta['top_title']
            if (center_title) {
                commit('SET_PAGE_CENTER', center_title)
            } else {
                commit('SET_PAGE_CENTER', "TrumanGu's Blog")
            }
            if (top_title) {
                commit('SET_PAGE_TOP', top_title)
            } else {
                commit('SET_PAGE_TOP', "TrumanGu's Blog")
            }
        }
    }
})