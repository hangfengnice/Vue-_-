<template>
  <div class="container">
    <div class="row">
      <div id="home" class="col-sm-12 text-center">
        <div class="background">
          <h1>欢迎各位的到来</h1>
          <h2>这里有大家喜欢的pizza</h2>
          <button @click='gotoMenu' class="btn btn-success">Let's order! ^^</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    gotoMenu(){
       // 跳转到上一次浏览的页面(数字表示第几次)
       // this.$router.go(-1)
       // 指定跳转的地址
       // this.$router.replace('/menu')
       //指定跳转路由的名字下
       // this.$router.replace({name:'menuLink'})

       //通过push进行跳转
       // this.$router.push('/menu)
       this.$router.push({name:'menuLink'})
    }
  }
}
</script>
<style  scoped>
  #home{
    background: url('../assets/yingying.jpeg') center no-repeat;
    /* background-size: contain; */
    height: 85vh;
    padding: 10%;

  }
  h1,h2{
    margin: 6%;

  }
  .background{
    max-width: 70vw;
    margin: 0 auto;
    padding: 20px;
    background: #eee;
  }

</style>
