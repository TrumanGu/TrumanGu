import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        refreshFlag: 0,
        scrollY: 0,
        windowWidth: 0,
        windowHeight: 0,

    },
    mutations: {
        HAS_REFRESHED(state, { refreshFlag }) {
            // console.log(refreshFlag)
            state.refreshFlag = refreshFlag
        },
        SCROLL(state, { scrollY }) {
            state.scrollY = scrollY
        },
        RESIZE(state, { windowWidth, windowHeight }){
            state.windowHeight = windowHeight
            state.windowWidth = windowWidth
        }
    }
})