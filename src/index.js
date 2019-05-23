import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import VueResource from 'vue-resource'
Vue.use(VueResource)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {Swipe,SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(MintUI)

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import router from './router.js'
import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})