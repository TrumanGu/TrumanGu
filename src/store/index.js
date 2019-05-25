import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        refreshFlag: false,
        scrollY: 0,
    },
    mutations: {
        HAS_REFRESHED(state, { refreshFlag }) {
            // console.log(refreshFlag)
            state.refreshFlag = refreshFlag
        },
        SCROLL(state, { scrollY }) {
            state.scrollY = scrollY
        }
    }
})