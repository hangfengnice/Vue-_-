<template>
  <div>
    <!-- <Ainput v-model='inputValue'></Ainput> -->
    <Ainput @input='handleInput'/>
    <!-- <p>{{inputValue}}</p> -->
    <Ashow :content='inputValue'/>
  </div>
</template>

<script>
import Ainput from '_c/Ainput.vue'
import Ashow from '_c/Ashow.vue'

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
  methods: {
    handleInput(val){
      this.inputValue = val
    }
  },
}
</script>

<style>

</style>
