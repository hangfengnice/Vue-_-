<template>
  <div>
    <!-- <Ainput v-model='inputValue'></Ainput> -->
    <Ainput @input='handleInput'/>
    <p>{{inputValue}} -> lastLetter is {{inpitValueLastLetter}}</p>
    <!-- <Ashow :content='inputValue'/> -->
    <p>appName: {{appName}}, appNameWithVersion : {{appNameWithVersion}}</p>
    <p>userName: {{userName}}, firstLetter : {{firstLetter}}</p>
    <p><button @click='handleChangeAppName'>rename appName</button></p>
    <p>{{appVersion}}</p>
    <p><button @click='changeUserName'>修改用户名</button></p>
    <p><button @click='registerModule'>动态注册模块</button></p>
    <p v-for='(li, index) in todoList' :key='index'>{{li}}</p>


  </div>
</template>

<script>
import Ainput from '_c/Ainput.vue'
import Ashow from '_c/Ashow.vue'
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: "store",
  data(){
    return {
      inputValue: ""
    }
  },
  components: {
    Ainput,
    Ashow
  },
  computed: {
    // ...mapState([
    //   'appName',
    // ]),
    // ...mapState('user',{
    //   userName: state => state.userName
    // }),
    ...mapGetters([
      'appNameWithVersion',
      "firstLetter"
    ]),
    ...mapState({
      appName: state => state.appName,
      userName: state => state.user.userName,
      appVersion: state => state.appVersion,
      // todoList: state => state.todo ? state.todo.todoList : []
      todoList: state => state.user.todo ? state.user.todo.todoList : []

    }),


    // appName(){
    //   return this.$store.state.appName
    // },
    // userName(){
    //   return this.$store.state.user.userName
    // }

    inpitValueLastLetter(){
      return this.inputValue.substr(-1,1)
    },
    // appNameWithVersion(){
    //   return this.$store.getters.appNameWithVersion
    // }
  },
  methods: {
    ...mapMutations([
      'SET_USER_NAME',
      "SET_APP_NAME"
    ]),
    ...mapActions([
      "updateAppName"
    ]),
    handleInput(val){
      this.inputValue = val
    },
    handleChangeAppName(){
      // this.$store.commit('SET_APP_NAME','newAppName')
      // this.$store.commit({
      //   type: "SET_APP_NAME",
      //   name: "newAppName"
      // })
      this.updateAppName()
      // this.SET_APP_NAME({name:'newAppName'})
      this.$store.commit('SET_APP_VERSION')

    },
    changeUserName(){
      this.SET_USER_NAME('vue-cource')
    },
    registerModule(){
      // this.$store.registerModule('todo',{
      //   state: {
      //     todoList: [
      //       '学习mutations',
      //       '学习actions',
      //     ]
      //   }
      // })
      this.$store.registerModule(['user','todo'],{
        state: {
          todoList: [
            '学习mutations',
            '学习actions',
          ]
        }
      })
    }
  },
}
</script>

<style>

</style>
