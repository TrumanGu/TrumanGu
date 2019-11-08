import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Viewer from 'v-viewer'
import marked from 'marked'
import VueDisqus from 'vue-disqus'
import './iview';
import './permission'
import 'iview/dist/styles/iview.css';
import './icons'
import './style/index.scss';
import Prism from 'prismjs'
import 'viewerjs/dist/viewer.css'
import store from './store'

marked.setOptions({
  renderer: new marked.Renderer(),
  "baseUrl": null,
  "breaks": true,
  "gfm": true,
  "headerIds": true,
  "headerPrefix": "",
  "langPrefix": "line-numbers language-",
  "mangle": true,
  "pedantic": false,
  "sanitize": false,
  "sanitizer": null,
  "silent": false,
  "smartLists": true,
  "smartypants": false,
  "tables": true,
  "xhtml": false
});


Vue.use(Viewer)
Vue.use(VueDisqus)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

Vue.prototype.$marked = marked
Vue.prototype.$Prism = Prism