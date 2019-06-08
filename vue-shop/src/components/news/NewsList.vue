<template>
    <div>
        <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for='item in newslist' :key=item.id>
					<router-link :to='"/home/newsinfo/"+item.id'>
						<img class="mui-media-object mui-pull-left" :src="item.imgurl">
						<div class="mui-media-body">
							<span>{{item.title}}</span>
							<p class="mui-ellipsis">
                                <span>发表时间： {{item.time}}</span>
                                <span>点击：{{item.click}} 次</span>
                            </p>
						</div>
					</router-link>
				</li>
			

			</ul>
    </div>
</template>

<script>
import {Toast} from 'mint-ui'
export default {
    
    data(){
        return {
newslist:[]
        }
    },
    created(){
this.getNewsList()
    },
    methods:{
        getNewsList(){
            this.$http.get('../../../data.json').then(data=>{
                this.newslist = data.body.student
            })
        }
    }
}
</script>

<style scoped>
    .mui-ellipsis{
        color : #226aff;
        display: flex;
        justify-content: space-between;
    }
</style>
