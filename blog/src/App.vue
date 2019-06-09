<template>
  <div id="app">
    <!-- <add-blog></add-blog> -->
   <!-- <show-blogs></show-blogs> -->
  <blog-header></blog-header>
   <router-view></router-view>
  </div>
</template>

<script>
import BlogHeader from './components/BlogHeader'
export default {
  name: 'app',
  components: {
   'blog-header': BlogHeader
  }
}
</script>

<style>

</style>
