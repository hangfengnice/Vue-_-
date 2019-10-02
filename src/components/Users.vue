<template>
  <div class="users">
    <ul>
      <li v-for='(item,index) in names' :key='index'
       >
        <h2>{{item.name}}</h2>
        <h3 >{{item.email}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'users',
  props:['names'],
  data(){
    return{
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
li{
  width: 150px;
  height: 150px;
  border: 1px solid lightgreen;
  text-align: center;
  margin-bottom: 10px;
  list-style: none;
  overflow: hidden;
}
ul{
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
}
</style>
