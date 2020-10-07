<template>
  <div class="container">
    <div class="content">
      <h3>粥品香坊（回龙观）</h3>
      <div class="star">
        <Star score="4" style="font-size: 24px; line-height: 40px; margin: 10px 0"></Star>
      </div>
      <fieldset>
        <legend>优惠信息</legend>
        <ul>
          <li>
            <button>减</button>
            <span>在线支付，满25减8</span>
          </li>
          <li>
            <button>减</button>
            <span>在线支付，满25减8</span>
          </li>
          <li>
            <button>减</button>
            <span>在线支付，满25减8</span>
          </li>
          <li>
            <button>减</button>
            <span>在线支付，满25减8</span>
          </li>
          <li>
            <button>减</button>
            <span>在线支付，满25减8</span>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>商家公告</legend>
        <ul>
          <li>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</li>
        </ul>
      </fieldset>
    </div>
    <span class="fa fa-close" @click="back"></span>
  </div>
</template>

<script>
import Star from "../../components/star.vue";

export default {
  name: "Alert",

  data() {
    return {};
  },
  created() {},
  methods: {
    back() {
      history.go(-1);
    }
  },
  components: {
    Star
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  text-align: center;
  .content {
    width: 100%;
    height: 445px;
    padding: 64px 0;
    h3 {
      font-size: 16px;
      font-weight: 900;
    }
    .star {
      height: 30px;
      line-height: 30px;
    }
    fieldset {
      width: 300px;
      margin: 20px auto 0;
      border: none;
      border-top: 1px solid rgba(255, 255, 255, 0.8);
      legend {
        padding: 0 10px;
        color: #fff;
        font-size: 12px;
        font-weight: bold;
      }
      ul {
        padding: 24px 0;
        text-align: left;
        li {
          padding: 0 10px;
          height: 28px;
          line-height: 28px;
        }
      }
    }
  }
  .fa-close {
    font-weight: 500;
    font-size: 30px;
  }
}
</style>
