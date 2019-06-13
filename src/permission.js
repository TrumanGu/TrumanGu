import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style

router.beforeEach(async (to, from, next) => {
    NProgress.start()
    next()
    NProgress.done()
})