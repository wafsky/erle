<template>
  <div class="container">
    <div class="left">
      <ul>
        <li
          v-for="(item, index) in list"
          :key="item._id"
          :class="{'active':isActive==index}"
          @click="choose(index)"
        >{{ item.name }}</li>
      </ul>
    </div>

    <div class="right">
      <ul v-for="items in list" :key="items._id">
        <li class="first">
          <h4>{{ items.name }}</h4>
        </li>
        <li class="two" v-for="(item, index) in items.foods" :key="index">
          <img :src="item.image" />
          <div class="con">
            <h5>{{ item.name }}</h5>
            <p>
              <span>月售{{ item.sellCount }}份</span>
              <span>好评{{ item.rating }}%</span>
            </p>
            <p>
              <span class="price">￥{{ item.price }}</span>
              <span v-if="item.oldPrice" class="oldPr">￥{{ item.oldPrice }}</span>
            </p>
          </div>
          <div class="add">
            <span class="nums fa fa-minus"></span>
            <div class="num">0</div>
            <span class="nums fa fa-plus"></span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      list: [],
      isActive: 0
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      console.log("aaa");
      axios.get("/list").then(res => {
        console.log(res.data);
        this.list = res.data.list;
      });
    },
    choose(index) {
      this.isActive = index;
    }
  },
  components: {}
};
</script>

<style scoped lang="scss">
.container {
  height: 500px;
  overflow: hidden;
  display: flex;
  .left {
    background: #f5f5f5;
    width: 80px;
    height: 100%;
    overflow-y: auto;

    ul {
      li {
        width: 56px;
        padding: 0 12px;
        height: 60px;
        border-bottom: #cecece solid 1px;
        display: flex;
        justify-content: center;
        align-items: center;
        &.active {
          background: #fff;
        }
      }
    }
  }
  .right {
    height: 100%;
    overflow: auto;
    flex: 1;
    ul {
      li {
        &.two {
          display: flex;
          padding: 18px;
          border-top: 1px solid #cecece;
          position: relative;
          img {
            width: 56px;
            height: 56px;
          }
          .con {
            padding-left: 5px;
            h5 {
              font-size: 14px;
              font-weight: 600;
              line-height: 18px;
              padding-bottom: 8px;
            }
            p {
              span {
                color: #999;
                padding: 0 5px;
              }
              .price {
                color: red;
                font-size: 14px;
                line-height: 24px;
              }
              .oldPr {
                line-height: 24px;
                text-decoration:line-through;  
              }
            }
          }
          .add {
            display: flex;
            position: absolute;
            right: 20px;
            bottom: 20px;
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
        }

        &.first {
          text-indent: 10px;
          border-left: 2px solid #ccc;
          background: #f5f5f5;
          line-height: 26px;
        }
      }
    }
  }
}
</style>
