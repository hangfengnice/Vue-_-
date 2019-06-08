import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
// import User from './components/Users.vue'
Vue.config.productionTip = false
Vue.prototype.axios = axios
// Vue.component('users',User)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
