<template>
  <div>
    <button @click='handleClick'>click me</button>
  </div>
</template>

<script>
export default {
  methods:{
    handleClick(){
      this.$bus.$emit('on-click','hello')
    }
  },
  mounted() {
    console.log(this.$bus)
  }
}
</script>

<style>

</style>
