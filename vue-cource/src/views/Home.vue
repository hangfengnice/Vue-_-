<template>
  <div class="home">
    <button @click='handleClick("back")'>返回上一页</button>
    <button @click='handleClick("push")'>跳转到parent</button>
    <button @click='handleClick("replace")'>replace到parent</button>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
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
    }
  }
}
</script>
