<template>
  <div class="con">
    <div class="tent">
      <div class="detail">
        <span class="fa fa-angle-left" @click="goBack"></span>
        <img :src="data.image" />
        <div class="data">
          <h4>{{ data.name }}</h4>
          <div class="rating">
            <span>月售{{ data.sellCount }}份</span>
            <span>好评率{{ data.rating }}%</span>
          </div>
          <div class="add">
            <p>￥{{ data.price }}</p>
            <div>加入购物车</div>
          </div>
        </div>
      </div>
      <div class="desc">
        <h5>商品介绍</h5>
        <p>{{ data.info }}</p>
      </div>
      <div class="eval">
        <ul class="title">
          <li
            v-for="(item, index) in rating"
            :key="index"
            :class="{'active':isActive==index}"
            @click="choose(index)"
          >{{ item }}</li>
        </ul>
        <ul class="cont">
          <li v-for="(item, index) in ratingList" :key="index">
            <div class="person">
              <div>{{ item.rateTime }}</div>
              <div>
                {{ item.username }}
                <img :src="item.avatar" />
              </div>
            </div>
            <div class="text">{{item.text}}</div>
          </li>
        </ul>
      </div>
    </div>

    <ShopCart></ShopCart>
  </div>
</template>

<script>
import axios from "axios";
import ShopCart from "../../components/ShopCart.vue";
// import { mapMutations } from "vuex";
export default {
  name: "",
  data() {
    return {
      data: {},
      isActive: 0,
      rating: ["全部", "推荐", "吐槽"],
      ratingList: []
    };
  },

  created() {
    var id = this.$route.params.id;
    var name = this.$route.params.name;
    this.getData(id, name);
  },
  methods: {
    getData(id, name) {
      axios.get(`/type/${id}`).then(res => {
        var foods = res.data.data.foods;
        for (let i = 0; i < foods.length; i++) {
          if (foods[i].name == name) {
            this.data = foods[i];
            console.log(this.data);
            this.ratingList = this.data.ratings;
            return;
          }
        }
      });
    },
    choose(index) {
      this.isActive = index;
      if (this.isActive == 0) {
        this.ratingList = this.data.ratings;
      } else if (this.isActive == 1) {
        this.ratingList = [];
        for (let i = 0; i < this.data.ratings.length; i++) {
          if (this.data.ratings[i].rateType == 0) {
            this.ratingList.push(this.data.ratings[i]);
          }
        }
      } else {
        this.ratingList = [];
        for (let i = 0; i < this.data.ratings.length; i++) {
          if (this.data.ratings[i].rateType == 1) {
            this.ratingList.push(this.data.ratings[i]);
          }
        }
      }
    },
    add() {
      this.$store.commit("add", {
        name: "牛肉",
        price: "14",
        count: 1
      });
      console.log(this.$store.state.shopList);
    },
    goBack() {
      history.go(-1);
    }
  },
  components: {
    ShopCart
  }
};
</script>

<style scoped lang="scss">
.con {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #f5f5f5;
  position: absolute;
  top: 0;
  left: 0;
  .tent {
    width: 100%;
    height: 100%;
    overflow: auto;
    .detail {
      width: 100%;
      background: #fff;
      border-bottom: 1px solid #cecece;
      margin-bottom: 20px;
      .fa-angle-left {
        position: absolute;
        left: 20px;
        top: 20px;
        display: block;
        width: 30px;
        height: 30px;
        font-size: 30px;
        color: #fff;
      }
      img {
        width: 100%;
      }
      .data {
        height: 72px;
        padding: 18px;
        h4 {
          line-height: 20px;
          font-size: 14px;
        }
        .rating {
          line-height: 20px;
          color: #999;
          padding-bottom: 12px;
          span {
            padding-right: 10px;
          }
        }
        .add {
          display: flex;
          justify-content: space-between;
          height: 24px;
          p {
            line-height: 24px;
            color: red;
            font-size: 16px;
          }
          div {
            border: none;
            width: 84px;
            height: 24px;
            line-height: 24px;
            text-align: center;
            outline: none;
            border-radius: 12px;
            background: #00a0dc;
            color: #fff;
          }
        }
      }
    }
    .desc {
      padding: 18px;
      background: #fff;
      border-top: 1px solid #cecece;
      border-bottom: 1px solid #cecece;
      margin-bottom: 20px;
      h5 {
        font-size: 14px;
        line-height: 24px;
      }
      p {
        padding-left: 10px;
        color: #999;
        line-height: 24px;
      }
    }
    .eval {
      background: #fff;
      .title {
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
      .cont {
        border-top: 1px solid #cecece;
        margin-bottom: 40px;
        li {
          height: 44px;
          padding: 16px 0;
          margin: 0 16px;
          border-bottom: 1px solid #cecece;
          .person {
            display: flex;
            justify-content: space-between;
            div {
              img {
                width: 12px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
