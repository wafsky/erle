<template>
  <div class="nav">
    <div class="bottom" @click="alert">
      <button>公告</button>
      <p>
        粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，
        由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深
        得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和
        2013年园博会指定餐饮服务商。
      </p>
      <span>&gt;</span>
    </div>
    <ul>
      <router-link tag="li" to="/goods">商品</router-link>
      <router-link tag="li" to="/comment">评论</router-link>
      <router-link tag="li" to="/business">商家</router-link>
    </ul>
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
        path: "/alert"
      });
    }
  },
  components: {}
};
</script>

<style scoped>
.bottom {
  height: 20px;
  background: rgba(0, 0, 0, 0.5);

  color: #fff;

  font-size: 10px;
  padding: 0 10px;
  display: flex;
  align-items: center;
}
.bottom p {
  text-indent: 6px;
  line-height: 20px;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.bottom button {
  width: 30px;
  height: 12px;
  background: #fff;
  color: rgba(0, 0, 0, 0.5);
  border: none;
}

.nav {
  width: 100%;
  height: 60px;
  background: white;
  border-bottom: 1px #cecece solid;
}
.nav ul {
  display: flex;
  text-align: center;
  height: 40px;
  align-items: center;
}
.nav ul li {
  flex: 1;
  height: 40px;
  line-height: 40px;
  font-size: 14px;
}
.nav ul li.active {
  color: red;
}
</style>
