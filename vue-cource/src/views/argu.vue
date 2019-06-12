<template>
  <div>
    {{name}}
  </div>
</template>

<script>
export default {
  props: {
    name : {
      type: String,
      default: 'lison'
    }
  },
  // beforeRouteUpdate(to,from,next){
  //   console.log('a')
  // }
}
</script>

<style>

</style>
