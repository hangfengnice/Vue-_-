<template>
  <div>
    <h3>{{photoInfo.title}}</h3>
    <p class="subtitle">
      <span>发表时间：</span>
      <span>点击：0 次</span>
    </p>
    <hr>

    <div class="container">
      <vue-preview :slides="slide1" @close="handleClose"></vue-preview>
    </div>
    <cmt-box :id="id"></cmt-box>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      photoInfo: {},
      num: "",
      slide1: [
        {
          src:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_b.jpg",
          msrc:
            "https://farm6.staticflickr.com/5591/15008867125_68a8ed88cc_m.jpg",
          alt: "picture1",
          title: "Image Caption 1",
          w: 600,
          h: 400
        },
        {
          src:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_b.jpg",
          msrc:
            "https://farm4.staticflickr.com/3902/14985871946_86abb8c56f_m.jpg",
          alt: "picture2",
          title: "Image Caption 2",
          w: 1200,
          h: 900
        }
      ]
    };
  },
  created() {
    this.getPhotoInfo();
  },
  methods: {
    getPhotoInfo() {
      if (this.id < 5) {
        this.num = 0;
      }

      this.$http
        .get("../../../json/realphoto" + this.num + ".json")
        .then(data => {
          this.photoInfo = data.body.message[this.id - 1];
        });
    }
  },
  components: {
    "cmt-box": comment
  }
};
</script>
<style lang="">
</style>
