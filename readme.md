# Vue

## 对Vue的一些个人总结,对每个文件的主要内容进行概括

### order 一个单页面的点餐系统

- 路由的配置

```javascript
import Vue from 'vue'   //使用router 必须要 引入 vue
import VueRouter from 'vue-router'
Vue.use(VueRouter)   // 挂到Vue上
const routes = [
  {path:'/',name:"homeLink",component:Home},
  {path:'/menu',name:"menuLink",component:Menu}
]
const router = new VueRouter({
  routes,
  mode:'history'   //去掉url上的#/
})

new Vue({
  router,          // 挂到实例上
  render: h => h(App),
}).$mount('#app')
```

- 路由的跳转

```javascript
  // 跳转到上一次浏览的页面(数字表示第几次)
  this.$router.go(-1)

  // 指定跳转的地址
  this.$router.replace('/menu')

  //指定跳转路由的名字下
  this.$router.replace({name:'menuLink'})

  //通过push进行跳转
  // this.$router.push('/menu)
  this.$router.push({name:'menuLink'})
```

- 二级路由

```html
 <div class="list-group mb-5">   <!-- 以name作为跳转 -->
       <router-link tag='li' class='nav-link' :to='{name:"historyLink"}'>
         <a class='list-group-item list-group-item-success' >历史订单</a>
       </router-link>
       <router-link tag='li' class='nav-link' :to='{name:"contactLink"}'>
         <a class='list-group-item list-group-item-success'>联系我们</a>
       </router-link>
       <router-link tag='li' class='nav-link' :to='{name:"orderingGuideLink"}'>
         <a class='list-group-item list-group-item-success'>点餐文档</a>
       </router-link>
       <router-link tag='li' class='nav-link' :to='{name:"deliveryLink"}'>
         <a class='list-group-item list-group-item-success'>快递信息</a>
       </router-link>
     </div>
</div>
```

```javascript
// children 二级路由 path的路径不同,可以自己尝试
{path:'/about',name:"aboutLink",component:About,children:[
    {path:'/about/contact',name:'contactLink',component:Contact},
    {path:'/history',name:'historyLink',component:History},
    {path:'/delivery',name:'deliveryLink',component:Delivery},
    {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
  ]},
```

- 三级路由和默认展示

```javascript
// children 三级路由 redirect:'/about/contact' redirect默认展示下一级路由
{path:'/about',name:"aboutLink",redirect:'/about/contact',component:About,children:[
    {path:'/about/contact',name:'contactLink',redirect:'/phone',component:Contact,children:[
      {path:'/phone',name:'phoneNumber',component:Phone},
      {path:'/personname',name:'personName',component:PersonName}
    ]},
    {path:'/history',name:'historyLink',component:History},
    {path:'/delivery',name:'deliveryLink',component:Delivery},
    {path:'/orderingGuide',name:'orderingGuideLink',component:OrderingGuide}
  ]},
```
