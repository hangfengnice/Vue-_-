<template>
  <div class='shopcar-container'>
        <div calss='goods-list'>
        <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<mt-switch ></mt-switch>
                        <img src="https://image.zhangxinxu.com/image/study/s/s256/mm3.jpg" alt="">
					<div class="info">
                        <h1>hahah</h1>
                        <p>
                            <span class='price'>$2199</span>
                            <numbox ></numbox>
                            <a href="">删除</a>
                        </p>
                    </div>
                    
                    
                    </div>
				</div>
			</div>


             <div class="mui-card">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						这是一个最简单的卡片视图控件；卡片视图常用来显示完整独立的一段信息，比如一篇文章的预览图、作者信息、点赞数量等
					</div>
				</div>
			</div>
    </div>
  </div>
</template>
<script>
import numbox from '../subcomponents/shopcar_numbox.vue'

export default {
     components:{
       numbox
   }
}
</script>

<style lang="scss" scoped>
.shopcar-container{
    .mui-card-content-inner{
        display: flex;
        text-align: center;
    }
    background-color: #eee;
    overflow: hidden;
    img{
width: 60px;
height: 60px;
    }
}
</style>


