import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueRouter from 'vue-router'
import routes from './router'


Vue.prototype.axios = axios
Vue.config.productionTip = false
Vue.use(VueRouter)

const router = new VueRouter({
  routes,
  mode:'history'
})

Vue.directive('rainbow',{
  bind(el,binding,vnode){
    el.style.color = '#' + Math.random().toString(16).slice(2,8);
   
  }
})
Vue.directive('theme',{
  bind(el,binding){
    if(binding.arg == 'column'){
      el.style.background = '#6677cc'
      el.style.padding= '20px'
    }
  }
})
Vue.filter('to-uppercase',value => value.toUpperCase())

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
