<template>
  <div class="newsinfo-container">
    <h3 class="title">呆萌少年--{{id}}</h3>
    <p class="subtitle">
      <span>发表时间：{{newsinfo.time}}</span>
      <span>点击： {{newsinfo.click}}</span>
    </p>
    <hr>
    <div class="content" v-html="newsinfo.content"></div>

    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      this.$http.get("../../../NewsInfo.json").then(data => {
        this.newsinfo = data.body.message[this.id - 1];
      });
    }
  },
  components: {
    "comment-box": comment
  }
};
</script>
<style lang="scss" >
.newsinfo-container {
  padding: 0 4px;
  .title {
    text-align: center;
    color: aqua;
  }
  .subtitle {
    color: #226aff;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }
  .content {
    color: black;
    img {
      width: 100%;
    }
  }
}
</style>
