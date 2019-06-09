import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import About from './components/About.vue'
import Customers from './components/Customers.vue'
import Add from './components/Add.vue'
import CustomerDetails from './components/CustomerDetails.vue'
import Edit from './components/Edit.vue'




Vue.use(VueRouter)
Vue.prototype.axios = axios
const router = new VueRouter({
  mode:'history',
   routes:[
     {path:'/',component: Customers},
     {path:'/about',component: About},
     {path:'/add',component: Add},
     {path:'/customer/:id',component: CustomerDetails},
     {path:'/edit/:id',component: Edit}



     

   ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
