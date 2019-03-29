import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import marked from 'marked'
import './components/SvgComponents/index'
import 'iview/dist/styles/iview.css';
import './style/index.scss'


marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  tables: true,
  breaks: false,
  pedantic: false,
  sanitize: true,
  smartLists: true,
  smartypants: false
});


Vue.use(iView)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.prototype.$marked = marked