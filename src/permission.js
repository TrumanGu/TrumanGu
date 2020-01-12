import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import store from './store'
router.beforeEach(async (to, from, next) => {
    NProgress.start()
    store.dispatch('setPageTitle', to).then(_ => {
        document.title = store.state.pageTopTitle
    })
    next()
    NProgress.done()
})