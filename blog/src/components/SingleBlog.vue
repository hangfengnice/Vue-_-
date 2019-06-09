<template>
  <div class="" id="single-blog">
    <h1>{{blog.title}}</h1>
    <p>作者: {{blog.author}}</p>
    <p>分类: </p>
    <ul>
      <li v-for='(item,index) in blog.categories' :key='index'>
        {{item}}
      </li>
    </ul>
    <article>{{blog.content}}</article>
    <router-link :to='"/edit/"+id '>编辑</router-link>
    <p><button @click='deleteSingleBlog()'>删除</button></p>
  </div>
</template>
<script>
export default {
  name:'single-blog',
  data(){
    return {
      id:this.$route.params.id,
      blog:{}
    }
  },
  created(){
    this.axios.get('http://localhost:3000/blogs/'+ this.id)
    .then(res =>{
      this.blog=res.data
      // console.log(this.id)
      // console.log(res)
    })
  },
  methods:{
     deleteSingleBlog(){
       this.axios.delete('http://localhost:3000/blogs/'+ this.id)
       this.$router.push({path:'/'})
     }
  }
}
</script>
<style scoped>
  #single-blog{
    max-width: 960px;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
    border: 1px solid #aaa;

  }
</style>

