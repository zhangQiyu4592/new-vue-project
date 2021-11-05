// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'   // 3、引入路由、分级页面、并对页面进行缓存

// 1、引入Elementui
import ELementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ELementUi)



// 2、引入filter
import { toString1 } from './units/filtre'
Vue.filter('toString1', toString1)
// 注入多个过滤器
// import * as filters from './assets/filters'
// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

Vue.directive('textDirective',{
  bind(el,binding,vnode,oldVnode){
    console.log(443,el,binding,vnode,oldVnode)
  }
})








Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
