<template>
  <div id="add-blog">
    <h2>编辑博客</h2>
    <form v-if='!submited'>
      <label for="">博客标题</label>
      <input type="text" v-model='blog.title' required>
      <label for="">博客内容</label>
      <textarea v-model='blog.content'></textarea>
      <div id="checkboxes">
        <label for="">Vue.js</label>
        <input type="checkbox" value='Vue.js' v-model='blog.categories'>
         <label for="">Node.js</label>
        <input type="checkbox" value='Node.js' v-model='blog.categories'>
         <label for="">React.js</label>
        <input type="checkbox" value='React.js' v-model='blog.categories'>
         <label for="">Angular.js</label>
        <input type="checkbox" value='Angular.js' v-model='blog.categories' >
      </div>
      <label for="">作者</label>
      <select v-model='blog.author'>
        <option :value="author" v-for='(author,index) in authors' :key='index'>
          {{author}}
        </option>
      </select>
      <button @click.prevent='post'>更新博客</button>
    </form>
    <div v-if='submited'>
      <h3>您的博客更新成功</h3>
    </div>
    <hr>
    <div id="preview">
      <h3>博客总揽</h3>
      <p>博客标题:{{blog.title}}</p>
      <p>博客内容</p>
      <p>{{blog.content}}</p>
      <p>博客分类</p>
      <ul>
        <li v-for='(category,index) in blog.categories' :key='index'>
          {{category}}
        </li>
      </ul>
      <p>作者:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'add-blog',
  data(){
    return{
      blog:{},
      authors:['hangfneg','yingying','jiaying'],
      submited:false
    }
  },
  created(){
      this.get(this.$route.params.id)
  },
  methods:{
    get(id){
      this.axios.get('http://localhost:3000/blogs/'+ id)
      .then(res => {
        // console.log(res)

        // this.submited = true
        this.blog = res.data
        
        })
    },
    post(){
      this.axios.put('http://localhost:3000/blogs/'+this.$route.params.id,this.blog)
      .then(res => {
        // console.log(res)

        // this.submited = true

        this.$router.push({path:'/'})
        })
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  #add-blog *{
    box-sizing: border-box;

  }
  #add-blog{
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type='text'],textarea,select{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #checkboxes label{
    display: inline-block;
    margin-top: 0;

  }
  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
  textarea{
    height: 200px;
  }
  button{
    display: block;
    margin: 20px 0;
    background: lightseagreen;
    color: #Fff;
    border: 0;
    padding: 14px;
    border-radius: 6px;
    font-size: 18px;
    cursor: pointer;
  }
  #preview{
    padding: 10px 20px;
    border: 1px solid #000;
    margin: 30px 0;

  }
  h3{
    margin-top: 10px;
  }


</style>
 