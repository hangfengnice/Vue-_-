import VueRouter from 'vue-router'

import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'
import ShopcarContainer from './components/tabbar/ShopcarContainer.vue'
import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'
import photoList from './components/photo/photolist.vue'
import photoinfo from './components/photo/photoinfo.vue'
import GoodsList from './components/goods/Goodslist.vue'
import GoodsInfo from './components/goods/GoodsInfo.vue'
import GoodsDesc from './components/goods/GoodsDesc.vue'
import GoodsComment from './components/goods/GoodsComment.vue'










var router = new VueRouter({
    routes:[
        {path:'/',redirect: '/home'},
      {path:'/home',component:HomeContainer},
      {path:'/member',component:MemberContainer},
      {path:'/search',component:SearchContainer},
      {path:'/shopcar',component:ShopcarContainer},
      {path:'/home/newslist',component:NewsList},
      {path:'/home/newsinfo/:id',component:NewsInfo},
      {path:'/home/photolist',component:photoList},
      {path:'/home/photoinfo/:id',component:photoinfo},
      {path:'/home/goodslist',component:GoodsList},
      {path:'/home/goodsinfo/:id',component:GoodsInfo,name:"goodsinfo"},
      {path:'/home/goodsdesc/:id',component:GoodsDesc,name:"goodsdesc"},
      {path:'/home/goodscomment/:id',component:GoodsComment,name:"goodscomment"},








    ],
    linkActiveClass:'mui-active'
})




export default router