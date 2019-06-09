<template>
  <div v-theme:column='"narrow"' id="show-blogs">
   <h1>博客总揽</h1>
   <input type="text" placeholder='搜索' v-model='search'>
   <div v-for='blog in filteredBlogs' :key='blog.id' class='single-blog'>
    <router-link :to='"/blog/" + blog.id'><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link> 
     <article>
       {{blog.content}}
     </article>
   </div>
  </div>
</template>

<script>

export default{
  data(){
    return{
      blogs: [],
      search:''
    }
  },
  created(){
    this.axios.get('http://localhost:3000/blogs')
    .then(res => {
      // console.log(res.data)
      this.blogs = res.data
    })
  },
  
  
  computed:{
    filteredBlogs(){
      return this.blogs.filter(blog => {
        return blog.author.match(this.search)
    })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
  }


</style>
 