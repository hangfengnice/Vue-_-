<template>
  <div id="app">
    <ul>
      <li><router-link to='/'>Home</router-link></li>
      <li><router-link to='/helloworld'>Helloworld</router-link></li>

    </ul>
   <router-view></router-view>
  </div>
</template>
<script>



export default {
  components:{
 
  },
  data(){
     return{
      
     }
  }
}
</script>
<style>

</style>
