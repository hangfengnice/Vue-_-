import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About.vue'
import Login from './components/Login'
import Register from './components/Register'

// 二级路由
import History from './components/about/History.vue'
import Contact from './components/about/Contact.vue'
import Delivery from './components/about/Delivery.vue'
import OrderingGuide from './components/about/OrderingGuide.vue'

//三级路由
import Phone from './components/about/contact/Phone.vue'
import PersonName from './components/about/contact/PersonName.vue'


Vue.use(VueRouter)
const routes = [
  {path:'/',name:"homeLink",component:Home},
  {path:'/menu',name:"menuLink",component:Menu},
  {path:'/admin',name:"adminLink",component:Admin},
  {path:'/about',name:"aboutLink",redirect:'/about/contact',component:About,children:[
    {path:'/about/contact',name:'contactLink',redirect:'/phone',component:Contact,children:[
      {path:'/phone',name:'phoneNumber',component:Phone},
      {path:'/personname',name:'personName',component:PersonName}
    ]},
    {path:'/history',name:'historyLink',component:History},
    {path:'/delivery',name:'deliveryLink',component:Delivery},
    {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
  ]},
  {path:'/login',name:"loginLink",component:Login},
  {path:'/register',name:"registerLink",component:Register},
  {path:'*',redirect:'/'}
]
const router = new VueRouter({
  routes,
  mode:'history'
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
