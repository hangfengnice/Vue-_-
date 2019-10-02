<template>
  <div id="home">
   <app-header></app-header>
   hello vue.js
   <users :names='names'></users>
   <app-footer></app-footer>
  </div>
</template>
<script>

import User from '../components/Users'
import Header from '../components/Header'
import Footer from '../components/Footer'


export default {
  components:{
    users:User,
    "app-header":Header,
    "app-footer": Footer
  },
  data(){
     return{
       names:[]
     }
  },
  created(){
    this.axios.get('http://jsonplaceholder.typicode.com/users')
    .then(res => {
      this.names = res.data
    })
    
  }

}
</script>
<style>

</style>
