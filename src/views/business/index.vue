<template>
  <div class="container">
    <div class="tops">
      <div class="title">
        <div class="left">
          <h3>粥品香坊（回龙观）</h3>
          <div class="star">
            <span>
              <Star score="4" style="font-size:16px;"></Star>
            </span>
            <span>(24)</span>
            <span>月售90单</span>
          </div>
        </div>
        <div class="right" @click="shouch" :class="{'active':isActive}">
          <span :class="{'active':isActive}" class="fa fa-heart"></span>
          <p>{{ shouchang }}</p>
        </div>
      </div>
      <ul>
        <li>
          <p>起送价</p>
          <div>
            <span>20</span>
            元
          </div>
        </li>
        <li>
          <p>商家配送</p>
          <div>
            <span>4</span> 元
          </div>
        </li>
        <li>
          <p>平均配送时间</p>
          <div>
            <span>38</span> 分钟
          </div>
        </li>
      </ul>
    </div>
    <div class="bots">
      <div>
        <h4>公告与活动</h4>
        <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
        <ul>
          <li>
            <button>减</button>
            <span>在线支付满28减5</span>
          </li>
          <li>
            <button>减</button>
            <span>在线支付满28减5</span>
          </li>
          <li>
            <button>减</button>
            <span>在线支付满28减5</span>
          </li>
          <li>
            <button>减</button>
            <span>在线支付满28减5</span>
          </li>
          <li>
            <button>减</button>
            <span>在线支付满28减5</span>
          </li>
        </ul>
      </div>

      <div>
        <h4>商家实景</h4>
        <p>
          <img
            src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180"
            alt
          />
          <img
            src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180"
            alt
          />
          <img
            src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180"
            alt
          />
        </p>
      </div>
      <div>
        <h4>商家信息</h4>
        <ul>
          <li>该商家支持发票,请下单写好发票抬头</li>
          <li>该商家支持发票,请下单写好发票抬头</li>
          <li>该商家支持发票,请下单写好发票抬头</li>
          <li>该商家支持发票,请下单写好发票抬头</li>
          <li>该商家支持发票,请下单写好发票抬头</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Star from "../../components/star.vue";

export default {
  name: "Business",
  data() {
    return {
      isActive: false,
      shouchang: "收藏"
    };
  },
  created() {},
  methods: {
    shouch() {
      this.isActive = !this.isActive;
      if (this.isActive) {
        this.shouchang = "已收藏";
      } else {
        this.shouchang = "收藏";
      }
    }
  },
  components: {
    Star
  }
};
</script>

<style scoped lang="scss">
.container {
  height: 500px;
  flex: 1;
  overflow: auto;
  .tops {
    padding: 18px;
    background: #fff;
    border-bottom: 1px #cecece solid;

    .title {
      height: 40px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px #cecece solid;
      padding-bottom: 18px;
      .left {
        h3 {
          font-size: 14px;
          font-weight: 600;
        }
        .star {
          line-height: 30px;
          font-size: 14px;
          display: flex;
          span {
            margin: 0 4px;
          }
        }
      }
      .right {
        width: 50px;
        text-align: center;
        position: relative;
        span {
          font-size: 24px;
          color: #aaa;
          &.active {
            color: red;
          }
        }
        &.active {
          color: red;
        }
      }
    }
    ul {
      height: 44px;
      display: flex;
      justify-content: space-around;
      padding-top: 18px;
      li {
        text-align: center;
        p {
          font-size: 10px;
          color: #999;
        }
        div {
          span {
            font-size: 20px;
            line-height: 24px;
            font-weight: 600;
          }
        }
      }
    }
  }
  .bots {
    background: #f5f5f5;
    border-top: 1px #cecece solid;
    > div {
      border-top: 1px #cecece solid;
      border-bottom: 1px #cecece solid;
      margin-top: 20px;
      padding: 18px;
    }
    div {
      background: #fff;
      h4 {
        font-size: 14px;
        line-height: 40px;
        font-weight: 500;
      }
      p {
        height: 120px;
        padding: 5px;
        line-height: 2em;
        color: red;
        font-size: 13px;
        font-weight: 200;
        display: flex;
        overflow: auto;

        img {
          height: 90px;
          margin: 0 2px;
        }
      }
      > ul {
        padding-top: 20px;
        > li {
          border-top: 1px solid #cecece;
        }
      }
    }

    ul {
      padding: 0 18px;
      background: #fff;
      li {
        line-height: 40px;
        font-weight: 200;
        button {
          background: red;
          border: none;
          color: #fff;
          margin: 0 10px;
        }
      }
    }
  }
}
</style>
