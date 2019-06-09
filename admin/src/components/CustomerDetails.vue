<template>
  <div class="customerdetails container">
    <router-link to='/' class='btn btn-primary'>返回主页</router-link>
    <h1 class="page-header">{{customer.name}}
      <span class='pull-right'>
        <router-link class='btn btn-primary'
        :to='"/edit/"+customer.id'>编辑</router-link>
        <button class='btn btn-danger' @click='deleteCustomer(customer.id)'>删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus-sign">{{customer.phone}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus-sign">{{customer.email}}</span>
      </li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus-sign">{{customer.education}}</span>
      </li>
      
      <li class="list-group-item"><span class="glyphicon glyphicon-plus-sign">{{customer.graduationschool}}</span></li>
    </ul>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus-sign">{{customer.profession}}</span>
      </li>
      <li class="list-group-item">
        <span class="glyphicon glyphicon-plus-sign">{{customer.profile}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "customerdetails",
  props: {},
  data() {
    return {
      customer: ""
    };
  },
  methods: {
    fetchCustomers(id) {
      this.axios.get("http://localhost:3000/users/" + id).then(res => {
        this.customer = res.data;
        // console.log(res)
      });
    },
    deleteCustomer(id){
      this.axios.delete("http://localhost:3000/users/" + id)
      .then(res =>{
       this.$router.push({path:'/',query:{alert:'删除成功'}})
      })
    }
  },
  created() {
    this.fetchCustomers(this.$route.params.id);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
