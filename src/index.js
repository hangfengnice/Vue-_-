import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import moment from 'moment'

Vue.filter('dataFormat',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
return moment(dataStr).format(pattern)

})

import VueResource from 'vue-resource'
Vue.use(VueResource)

// Vue.http.options.root = 'http://vue.studyit.io'



import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {Swipe,SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(MintUI)
import { Button } from 'mint-ui';

Vue.component(Button.name, Button);

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import router from './router.js'
import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router
})