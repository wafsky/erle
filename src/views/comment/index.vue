<template>
  <div class="container">
    <div class="header">
      <div class="left">
        <div>4.2</div>
        <p>综合评分</p>
        <p>高于周边商家69.2%</p>
      </div>
      <ul class="right">
        <li>
          <span>服务态度</span>
          <div>星星</div>
          <div>4.1</div>
        </li>
        <li>
          <span>服务态度</span>
          <div>星星</div>
          <div>4.1</div>
        </li>
        <li>
          <span>送达时间</span>
          <p>38分钟</p>
        </li>
      </ul>
    </div>

    <div class="con">
      <ul class="title">
        <router-link tag="li" to="/comment/total">全部24</router-link>
        <router-link tag="li" to="/comment/good">推荐18</router-link>
        <router-link tag="li" to="/comment/bad">吐槽6</router-link>
      </ul>
      <router-view></router-view>
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
  components: {}
};
</script>

<style scoped lang="scss">
.container {
  height: 500px;
  background: #f5f5f5;
  flex: 1;
  overflow: auto;
  .header {
    padding: 18px 0;
    display: flex;
    text-align: center;
    background: #fff;
    .left {
      width: 138px;
      border-right: 1px solid #cecece;
      div {
        height: 28px;
        color: #ff9900;
        font-size: 24px;
        line-height: 28px;
      }
      p {
        font-size: 12px;
        line-height: 24px;
      }
    }
    .right {
      flex: 1;
      padding: 0 24px;
      li {
        display: flex;
        line-height: 24px;
        font-size: 12px;
        span {
          display: block;
          margin-right: 10px;
        }
        p {
          color: #aaa;
        }
      }
    }
  }
  .con {
    .title {
      width: 100%;
      padding: 18px 10px;
      display: flex;
      li {
        height: 16px;
        padding: 8px 12px;
        margin: 0 4px;
        background: rgba(0, 255, 0, 0.2);
        &.active {
          background: rgba(0, 255, 0, 0.8);
          color: #fff;
        }
      }
    }
  }
}
</style>
