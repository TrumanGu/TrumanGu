import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import './icons'
import marked from 'marked'
import 'iview/dist/styles/iview.css';
import './style/index.scss';


marked.setOptions({
  renderer: new marked.Renderer(),
  "baseUrl": null,
  "breaks": false,
  "gfm": true,
  "headerIds": true,
  "headerPrefix": "",
  "highlight": null,
  "langPrefix": "language-",
  "mangle": true,
  "pedantic": false,
  "sanitize": false,
  "sanitizer": null,
  "silent": false,
  "smartLists": false,
  "smartypants": false,
  "tables": true,
  "xhtml": false
});


Vue.use(iView)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

Vue.prototype.$marked = marked