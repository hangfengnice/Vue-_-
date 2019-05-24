<template>
  <div class="goodsinfo-container">
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
          <p>
            购买数量：
            <numbox></numbox>
          </p>
          <P>
            <mt-button type="primary" size="small">立即购买</mt-button>
            <mt-button type="danger" size="small">加入购物车</mt-button>
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
      lunbotu: []
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
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


