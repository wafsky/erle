<template>
  <div class="header">
    <div class="left">
      <img
        src="http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg"
        alt=""
      />
    </div>
    <div class="mid">
      <div class="title">
        <button>品牌</button>
        <h2>粥品香坊（回龙观）</h2>
      </div>
      <div class="desc">蜂鸟专送/38分钟送达</div>
      <div class="sup_desc">
        <button>减</button>
        <p>在线支付，满28减5</p>
      </div>
    </div>
    <div class="right">
      5个
      <span>&lt; </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {},
};
</script>




<style lang="scss" scoped>
.header {
  height: 66px;
  padding: 20px;
  background: #eee;
  display: flex;
  .left {
    height: 100%;
    img {
      height: 100%;
    }
  }
  .mid {
    .title {
      display: flex;
    }
    .sup_desc {
      display: flex;
    }
  }
}
</style>
