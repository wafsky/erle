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
    <div class="right" @click="alert">
      5个
      <span>&gt; </span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {
    alert() {
      this.$router.push({
        path: "/alert",
      });
    },
  },
  components: {},
};
</script>




<style lang="scss" scoped>
button {
  border: none;
}

.header {
  height: 66px;
  padding: 20px;
  background: rgba(0, 0, 0, 0.2);
  display: flex;
  position: relative;
  .left {
    height: 100%;
    img {
      height: 100%;
    }
  }
  .mid {
    padding-left: 16px;
    color: #fff;
    width: 184px;
    .title {
      display: flex;
      button {
        width: 30px;
        height: 18px;

        background: red;
      }
      h2 {
        height: 20px;
        font-size: 16px;
        font-weight: 900;
        color: #fff;
        text-indent: 10px;
      }
    }
    .desc {
      font-size: 12px;
      line-height: 24px;
    }
    .sup_desc {
      display: flex;
      button {
        width: 12px;
        height: 12px;
        background: #fff;
        color: red;
      }
      p {
        text-indent: 6px;
      }
    }
  }
  .right {
    width: 36px;
    height: 24px;
    padding: 0 8px;
    border-radius: 12px;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    line-height: 24px;
    position: absolute;
    right: 12px;
    bottom: 20px;
  }
}
</style>
