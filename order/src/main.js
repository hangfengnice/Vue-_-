import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './router'
Vue.use(VueRouter)
const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to,from,savedPosition){
    // return{x:0,y:100}
    return {selector:'.btn'}
  }
})
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
