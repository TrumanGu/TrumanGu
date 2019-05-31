import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import './icons'
import marked from 'marked'
import 'iview/dist/styles/iview.css';
import './style/index.scss';
import 'highlight.js/styles/github.css'
// import { highlightAuto } from 'highlight.js'

import store from './store'

Vue.directive('highlight',function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block)=>{
    hljs.highlightBlock(block)
    hljs.lineNumbersBlock(block);
  })
})

marked.setOptions({
  renderer: new marked.Renderer(),
  "baseUrl": null,
  "breaks": true,
  "gfm": true,
  "headerIds": true,
  "headerPrefix": "",
  // 'highlight': function (code) {
  //   return require('highlight.js').highlightAuto(code).value;
  // },
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

// $(document).ready(function() {
 
// });

Vue.use(iView)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

Vue.prototype.$marked = marked