import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import Vuex from 'vuex'
Vue.use(Vuex)
var car = JSON.parse(localStorage.getItem('car')||"[]")

var store = new Vuex.Store({
    state:{
       
        car:car
    },
    mutations:{
        addToCar(state,goodsinfo){
            var flag = false
            state.car.some(item=>{
                if(item.id == goodsinfo.id){
                    console.log(item.count)
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if(!flag){
                state.car.push(goodsinfo)
            }
            localStorage.setItem('car',JSON.stringify(state.car))

        }
        
    },
    getters:{
        getAllCount(state){
            var c = 0

            state.car.forEach(item=>{
                c += item.count
            })
            return c
        },
        getGoodsCount(state){
            var o ={}
            state.car.forEach(item=>{
                o[item.id] = item.count
            })
            return o
        }
    }
})


import moment from 'moment'

Vue.filter('dataFormat',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
return moment(dataStr).format(pattern)

})

import VueResource from 'vue-resource'
Vue.use(VueResource)

// Vue.http.options.root = 'http://vue.studyit.io'
Vue.http.options.emulateJSON =true

import VuePreview from 'vue-preview'

// defalut install
Vue.use(VuePreview)

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import {Swipe,SwipeItem} from 'mint-ui'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem)
Vue.use(MintUI)
import { Button } from 'mint-ui';
import { Lazyload } from 'mint-ui';
Vue.use(Lazyload);

Vue.component(Button.name, Button);

import './lib/mui/css/mui.css'
import './lib/mui/css/icons-extra.css'

import router from './router.js'
import app from './App.vue'
var vm = new Vue({
    el:'#app',
    render:c=>c(app),
    router,
    store

})