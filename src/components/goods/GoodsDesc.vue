<template>
    <div>
        <h3>{{info.title}}</h3>
        <div class="content" v-html='info.content'></div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            info:{}
        }
    },
    created(){
        this.getGoodsSesc()
    },
    methods:{
        getGoodsSesc(){
            this.$http.get('../../../json/Goodsdesc.json').then(data=>{
               console.log(data.body)
this.info = data.body.message
            })
        }
    }

}
</script>
<style lang="scss" scoped>

</style>