import Home from '@/views/Home.vue'

export default [{
    path: '/',
    alias:'/home',
    name: 'home',
    component: Home,
    props: route => ({
      food: route.query.food
    }),
    beforeEnter: (to, from, next) => {
      // if(from.name === 'about') console.log('from about')
      // else console.log('not from about')
      next()
    }
  },
  {
    path: "/login",
    name:'login',
    component: () => import("@/views/login.vue")
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '@/views/About.vue'),
    props: {
      food: "banana"
    },
    meta:{
      title: "about"
    }
  },
  {
    path: '/argu/:name',
    name: 'argu',
    component: () => import("@/views/argu.vue"),
    props: true
  },
  {
    path: "/parent",
    name:'parent',
    component: () => import("@/views/parent.vue"),
    children:[
      {
        path:"child",
        component: () => import('@/views/child.vue')
      }
    ]
  },
  {
    path:"/named_view",
    components: {
      default: () => import('@/views/child.vue'),
      email: () => import('@/views/email.vue'),
      tel: () => import('@/views/tel.vue')
    }
  },
  {
    path:"/main",
    redirect:'/'
  },
  {
    path: '/store',
    component: () => import('@/views/store.vue')
  },
  {
    path: '*',
    component: () => import("@/views/error_404.vue")
  }
]
