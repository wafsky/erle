<template>
  <div class="shop">
    <ul class="shopList" v-show="flag">
      <li class="first">
        <div>购物车</div>
        <p>清空</p>
      </li>
      <li v-for="(item,index) in shopList" :key="index">
        <h5>{{ item.name }}</h5>
        <div class="price">￥{{ item.price }}</div>
        <div class="add">
          <span class="nums fa fa-minus"></span>
          <div class="num">{{item.count}}</div>
          <span class="nums fa fa-plus"></span>
        </div>
      </li>
    </ul>
    <div class="shopCart">
      <div class="left" @click="shopCart">
        <div class="cart">
          <span class="fa fa-cart-plus"></span>
        </div>
        <div class="total">￥0元</div>
        <div class="up">另需￥4元配送费</div>
      </div>
      <div class="right">￥20元起送</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      flag: false,
      shopList: []
    };
  },

  created() {
    this.getData();
  },
  methods: {
    getData() {
      var list = this.$store.state.shopList;
      var data = [];
      for (let i = 0; i < list.length; i++) {
        if (list[i].count != 0) {
          data.push(list[i]);
        }
      }
      console.log(data);
      this.shopList = data;
      console.log(this.shopList);
    },

    shopCart() {
      this.flag = !this.flag;
    }
  },

  components: {}
};
</script>

<style scoped lang="scss">
.shop {
  .shopCart {
    width: 100%;
    height: 48px;
    background: #222;
    color: #aaa;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    .left {
      width: 270px;
      height: 100%;
      display: flex;
      line-height: 48px;
      .cart {
        width: 56px;
        height: 56px;
        background: #222;
        margin: -10px 12px 0;
        border-radius: 50%;

        span {
          display: block;
          width: 44px;
          height: 44px;
          padding: 6px;
          background: #333;
          border-radius: 50%;
          text-align: center;
          line-height: 44px;
          font-size: 24px;
        }
      }
      .total {
        margin: 12px 0;
        padding-right: 12px;
        border-right: 1px solid #999;
        line-height: 24px;
        font-size: 14px;
        font-weight: bold;
      }
      .up {
        flex: 1;
        text-align: center;
      }
    }
    .right {
      width: 105px;
      height: 100%;
      background: #333;
      line-height: 48px;
      text-align: center;
    }
  }
  .shopList {
    text-align: left;
    position: absolute;
    left: 0;
    bottom: 48px;
    width: 100%;
    li {
      height: 48px;
      border-bottom: 1px solid #999;
      background: #fff;
      padding: 0 20px;
      line-height: 48px;
      display: flex;
      font-size: 14px;
      position: relative;
      h5 {
        width: 190px;

        color: #000;
      }
      .price {
        color: red;
      }
      .add {
        display: flex;
        position: absolute;
        right: 20px;
        bottom: 10px;
        text-align: center;
        .nums {
          font-size: 16px;
          display: block;
          width: 24px;
          height: 24px;
          background: green;
          border-radius: 50%;
          &.fa-minus {
            width: 20px;
            height: 20px;
            line-height: 22px;
            background: none;
            border: 2px solid green;
            color: green;
          }
          &.fa-plus {
            line-height: 26px;
            color: #fff;
          }
        }
        .num {
          font-size: 16px;
          padding: 0 10px;
          line-height: 24px;
        }
      }

      &.first {
        justify-content: space-between;
        height: 40px;
        line-height: 40px;
        background: #f5f5f5;
        div {
          color: #666;
        }
        p {
          color: green;
        }
      }
    }
  }
}
</style>

