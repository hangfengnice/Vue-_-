<template>
  <div class="container">
    <Alert v-if='alert' :message='alert'></Alert>

    <h1 class="page-header">用户管理系统</h1>
    <input type="text" class='from-control'
    v-model='filterInput'
     placeholder="搜索" >
     <br>  
    <table class="table table-striped">
     <thead>
       <tr>
         <th>姓名</th>
         <th>电话</th>
         <th>邮箱</th>
         <th></th>
       </tr>
     </thead>
     <tbody>
       <tr v-for='customer in filterBy(customers,filterInput)' :key='customer.id'>
         <td>{{customer.name}}</td>
         <td>{{customer.phone}}</td>
         <td>{{customer.email}}</td>
         <td><router-link class='btn btn-success' :to='"/customer/"+customer.id'>详情</router-link></td>
       </tr>
     </tbody>

    </table>
   
  </div>
</template>

<script> 
import Alert from './Alert'
export default {
  
  name: 'customers',
  
  data(){
    return {
      customers:[],
      alert:'',
      filterInput:''
    }
  },
  components:{
    Alert
  },
  methods:{
    fetchCustomers(){
      this.axios.get('http://localhost:3000/users')
      .then(res => {
        this.customers = res.data
      })
    },
    filterBy(customers,filterInput){
      return customers.filter(item => item.name.match(filterInput))
    }
  },
  created(){
    if(this.$route.query.alert){
      this.alert = this.$route.query.alert
    }
    this.fetchCustomers()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
