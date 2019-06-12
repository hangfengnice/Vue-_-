<template>
  <div class="home">
    <p>{{food}}</p>
    <button @click='handleClick("back")'>返回上一页</button>
    <button @click='handleClick("push")'>跳转到parent</button>
    <button @click='handleClick("replace")'>replace到parent</button>
    <!-- <button @click ='getInfo'>请求数据</button> -->

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import {getUserInfo} from '@/api/user'
export default {
  name: 'home',
  props:{
    food: {
      type: String,
      default: 'apple'
    }
  },
  beforeRouteEnter (to, from, next) {
    // console.log(this) 此时获取不到实例
    // next(vm => console.log(vm)) 这样可以访问
    next()
  },
  // beforeRouteLeave (to, from, next) {
  //   const leave = confirm('leave?')
  //   if(leave) next()
  //   else next(false)
  // },
  components: {
    HelloWorld
  },
  methods:{
    handleClick(type){
      const name = 'lison'
      if(type === 'back'){
        this.$router.back()
      }else if(type === 'push'){
        this.$router.push(
          {
            path: `/argu/${name}`
            // name:'argu',
            // params:{
            //   name:'lison'
            // }
            // query:{
            //   name:'lison'
            // }
            })
      }else if(type === 'replace'){
        this.$router.replace({name:'parent'})
      }
    },
    getInfo(){
      // axios.post('http://localhost:3000/getUserInfo',{usrId: 21})
      // .then(res => {
      //   console.log(res)
      // })
      getUserInfo({userId: 21}).then(res => {
        console.log('res: ',res)
      })
    }
  }
}
</script>
