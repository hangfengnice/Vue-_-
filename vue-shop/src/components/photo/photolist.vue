<template>
  <div>
    <div id="slider" class="mui-slider">
      <div
        id="sliderSegmentedControl"
        class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
      >
        <div class="mui-scroll">
          <a
            class="mui-control-item mui-active"
            v-for="item in cates"
            :key="item.id"
            @click="getPhotoListByCateId(item.id)"
          >{{item.title}}</a>
        </div>
      </div>
    </div>

    <ul class="photo-list">
      <router-link v-for="item in list" :key="item.id" :to='"/home/photoinfo/"+item.id' tag='li'>
        <img v-lazy="item.imgurl">
        <p>{{item.zhaiyao}}</p>
      </router-link>
    </ul>
  </div>
</template>

<script>
// import mui from '../../lib/mui/js/mui.js'
// mui('.mui-scroll-wrapper').scroll({
// 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// });
export default {
  data() {
    return {
      cates: [],
      list: []
    };
  },
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(0);
  },
  methods: {
    getAllCategory() {
      this.$http.get("../../../photo.json").then(data => {
        data.body.message.unshift({ title: "全部", id: 0 });
        this.cates = data.body.message;
      });
    },
    getPhotoListByCateId(id) {
      this.$http.get("../../../json/realphoto" + id + ".json").then(data => {
        // data.body.message.unshift({ title: "全部", id: 0 });

        this.list = data.body.message;
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.photo-list {
  li {
    padding: 10px;
    list-style: none;
    background-color: #ccc;
    text-align: center;
    box-shadow: 0 0 6px #999;
    img {
      width: 100%;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
  }
}
</style>


