<template>
  <div>
    <!-- <Ainput v-model='inputValue'></Ainput> -->
    <Ainput @input='handleInput'/>
    <p>{{inputValue}} -> lastLetter is {{inpitValueLastLetter}}</p>
    <!-- <Ashow :content='inputValue'/> -->
    <p>appName: {{appName}}, appNameWithVersion : {{appNameWithVersion}}</p>
    <p>userName: {{userName}}, firstLetter : {{firstLetter}}</p>

  </div>
</template>

<script>
import Ainput from '_c/Ainput.vue'
import Ashow from '_c/Ashow.vue'
import {mapState, mapGetters} from 'vuex'
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
      userName: state => state.user.userName
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
    handleInput(val){
      this.inputValue = val
    }
  },
}
</script>

<style>

</style>
