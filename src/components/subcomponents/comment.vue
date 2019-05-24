<template>
  <div>
    <h3 class="cmt-container">发表评论</h3>
    <hr>
    <textarea name id cols="30" rows="10" placeholder="请输入想说的说" v-model='msg'></textarea>
    <mt-button type="primary" size="large" @click='postComment'>发表评论</mt-button>

    <div class="cmt-list" v-for="(item,i) in comments" :key="item.time">
      <div class="cmt-item">
        <div
          class="cmt-title"
        >第{{i + 1}}楼&nbsp;&nbsp;用户：{{item.user}}&nbsp;&nbsp;发表时间： {{item.time}}</div>
        <div class="cmt-body">{{item.content}}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">发表更多</mt-button>
  </div>
</template>



<script>
import {Toast} from 'mint-ui'

export default {
  data() {
    return {
      page: "1",
      comments: [],
      msg:""
    };
  },
  created() {
    this.getComment();
  },
  methods: {
    getComment() {
      this.$http.get("../../../comment.json").then(data => {
        // this.comments = data.body["message" + this.page]
        this.comments = this.comments.concat(data.body["message" + this.page]);
        // console.log(this.comments)
      });
    },
    getMore() {
      this.page++, this.getComment();
    },
    postComment(){
if(this.msg.trim().length === 0){
  return Toast('内容不能为空')
}
      this.$http.post('../../../comment.json',{
        content: this.msg.trim()
      }).then(function(data){
        var cmt = {
          user :"达纳海",
          time: Date.now(),
          content: this.msg.trim()
        }
        this.comments.unshift(cmt)
        this.msg=''
      })
    }
  }
};
</script>

<style lang="scss" scoped>
.cmt-container {
  textarea {
    font-size: 14px;
    height: 85px;
    margin: 0;
  }
  .cmt-body {
    text-indent: 2em;
  }
}
</style>

