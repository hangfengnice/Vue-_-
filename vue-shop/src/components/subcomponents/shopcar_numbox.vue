<template>
    <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
					<button class="mui-btn mui-btn-numbox-minus" type="button" @click='del'>-</button>
					<input id="test" class="mui-input-numbox" type="number"  v-model='value'/>
					<button class="mui-btn mui-btn-numbox-plus" type="button" @click='add'>+</button>
				</div>
</template>
<script>
 export default {
  data(){
      return {
          value: 1
      }
  },
 
  methods:{
      del(){
          this.value--
          if(this.value < 0){
              this.value = 0
          }
      },
      add(){
          this.value++
      }
  }
}
</script>
<style lang="scss" scoped>


</style>

