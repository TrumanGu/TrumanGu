import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import store from './store'

const BlogName =  "TrumanGu's Blog"
router.beforeEach(async (to, from, next) => {
    NProgress.start()
    store.dispatch('setPageTitle', to).then(_ => {
        const title = store.state.pageTopTitle
        if(title === BlogName){
            document.title = BlogName
        }else{
            document.title = title + ' | '+ BlogName
        }
    })
    next()
    NProgress.done()
})