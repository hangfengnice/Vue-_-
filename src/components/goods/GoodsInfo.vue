<template>
  <div class="goodsinfo-container">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
      <div class="ball" v-show="ballflag" ref='ball'></div>
    </transition>
    <!-- 轮播图 -->
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <swiper :lunbotulist="lunbotu" :isfull="false"></swiper>
        </div>
      </div>
    </div>

    <!--  -->
    <div class="mui-card">
      <div class="mui-card-header">可爱的妹子</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p class="price">
            市场价：
            <del>¥2399</del>&nbsp;&nbsp;销售价：
            <span class="now_price">$2199</span>
          </p>
          <div>
购买数量：
            <div data-v-3bdad149="" data-v-97a93baa="" data-numbox-min="1" data-numbox-max="9" class="mui-numbox">
              <button data-v-3bdad149="" type="button" class="mui-btn mui-btn-numbox-minus" @click='delnumber'>-</button> 
              <input data-v-3bdad149="" id="test" type="number" value="1" class="mui-input-numbox" v-model='value'> 
              <button data-v-3bdad149="" type="button" class="mui-btn mui-btn-numbox-plus" @click='addnumber'>+</button>
              </div>
          </div>
            
          
          <P>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small" @click="addToShopCar">加入购物车</mt-button>
          </P>
        </div>
      </div>
    </div>
    <!-- 商品参数区域 -->
    <div class="mui-card">
      <div class="mui-card-header">数字</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>可爱：</p>
          <p>漂亮：</p>
          <p>善良：</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
        <mt-button type="danger" size="large" plain @click="gocomment(id)">讨论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
import swiper from "../subcomponents/swiper.vue";
import numbox from "../subcomponents/goodsinfo_numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunbotu: [],
      ballflag: false,
      value: 1,
      
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    beforeEnter(el){
      el.style.transform = 'translate(0,0)'

    },
    enter(el,done){

const ballPosition = this.$refs.ball.getBoundingClientRect()
const badgePosition = document.getElementById('badge').getBoundingClientRect()

const xDist = badgePosition.left - ballPosition.left
const yDist = badgePosition.top - ballPosition.top



      el.offsetTop;
      el.style.transform = `translate(${xDist}px,${yDist}px)`
      el.style.transition = "all .7s cubic-bezier(.39,-0.29,1,.68)"
      // cubic-bezier(.41,.01,.82,1.15)
      done()
    },
    afterEnter(el){
this.ballflag = !this.ballflag
    },
    getLunbotu() {
      this.$http.get("../../../json/goodsurl.json").then(data => {
        this.lunbotu = data.body.message;
      });
    },
    goDesc(id) {
      this.$router.push({ name: "goodsdesc", params: { id } });
    },
    gocomment(id) {
      this.$router.push({ name: "goodscomment", params: { id } });
    },
    addToShopCar() {
      this.ballflag = !this.ballflag;
    },
    delnumber(){
      this.value --
      if(this.value < 0)this.value =0;
    },
    addnumber(){
      this.value++
    }
  },
  components: {
    swiper,
    numbox
  }
};
</script>

<style lang="scss" scoped>
.goodsinfo-container {
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: red;
    position: absolute;
    z-index: 99;
    top: 511px;
    left: 151px;
      // transform : translate(137px,190px)

  }
  background-color: #eee;
  .now_price {
    font-size: 16px;
  }
}
.mui-card-footer {
  display: block;
  button {
    margin: 14px 0;
  }
}
</style>


