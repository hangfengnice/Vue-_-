import ShowBlogs from './components/ShowBlogs.vue'
import AddBlog from './components/AddBlog.vue'
import SingleBlog from './components/SingleBlog.vue'
import Edit from './components/Edit.vue'



export default [
  {path:'/',component: ShowBlogs},
  {path:'/add',component: AddBlog},
  {path:'/blog/:id',component:SingleBlog},
  {path:'/edit/:id',component:Edit}


]
