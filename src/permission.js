import router from './router'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import store from './store'

const BlogName =  "TrumanGu's Blog"
router.beforeEach(async (to, from, next) => {
    NProgress.start()
    store.dispatch('setPageTitle', to).then(() => {
        const title = store.state.pageTopTitle
        if(title === BlogName){
            document.title = BlogName
        }else{
            document.title = title + ' | '+ BlogName
            // let meta = metaList[metaList.length-1]
            // console.log(meta.name, meta.content)
            let metaList = document.getElementsByTagName('meta')
            for(let item of metaList){
                if(item.name === 'description'){
                    item.setAttribute('content', document.title)
                }
            }
        }
    })
    next()
    NProgress.done()
})