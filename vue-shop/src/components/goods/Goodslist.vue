<template lang="">

    <div class='goods-list' >
        <!-- <router-link class='goods-item' v-for='item in list' :key='item.id' :to='"/home/goodsinfo/"+item.id' tag='div'>
            <img :src='item.imgurl'></img>
            <h1 class='title'>苹果</h1>
            <div class='indo'>
                <p class='price'>
                    <span class='now'>$888</span>
                    <span class='old'>$999</span>

                </p>
                <p class='sell'>
                    <span class='now'>热卖中</span>
                    <span class='old'>剩88件</span>
                </p>
            </div>
        </router-link> -->
        <div class='goods-item' v-for='item in list' :key='item.id' :to='"/home/goodsinfo/"+item.id' @click='getDetail(item.id)' >
            <img :src='item.imgurl'></img>
            <h1 class='title'>苹果</h1>
            <div class='indo'>
                <p class='price'>
                    <span class='now'>$888</span>
                    <span class='old'>$999</span>

                </p>
                <p class='sell'>
                    <span class='now'>热卖中</span>
                    <span class='old'>剩88件</span>
                </p>
            </div>
        </div>
       
          
<mt-button type='danger' size='large' @click='getMore'>加载更多</mt-button>
    </div>
</template>
<script>
export default {
  data() {
    return {
      number: 0,
      list: []
    };
  },
  created() {
    this.getGoodsList();
  },
  methods: {
    getGoodsList() {
      this.$http.get("../../../json/goodslist0.json").then(data => {
        this.list = data.body.message;
      });
    },
    getMore() {},
    getDetail(id){
        // this.$router.push("/home/goodsinfo/" + id)
        this.$router.push({ name: 'goodsinfo', params: { id }})
    }
  }
};
</script>
<style lang="scss" scoped>
.goods-list {
  display: flex;
  flex-wrap: wrap;
  padding: 7.5px;
  justify-content: space-between;
  .goods-item {
    padding: 2px;
    margin: 3px 0;
    width: 49%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 275px;

    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }
    .indo {
      background-color: #dee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
      }
    }
  }
}
</style>
