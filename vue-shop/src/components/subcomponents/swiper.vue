<template>
    <div>
         <mt-swipe :auto="4000">
      <mt-swipe-item v-for='item in lunbotulist' :key='item.id'>
<img :src="item.imgurl" alt="" :class='{full:isfull}'>
      </mt-swipe-item>
      
    </mt-swipe>
    </div>
</template>
<script>
export default {
    props:['lunbotulist',"isfull"]
}
</script>
<style lang="scss" scoped>
.mint-swipe{
    height: 320px;
    img{
       
        // width: 100%;
        height: 100%;
    }
}
.mint-swipe-item{
    text-align: center;
}

.mui-grid-view.mui-grid-9{
    background-color: #fff;
    border: none;
}
.full{
    width: 100%;
}
</style>
