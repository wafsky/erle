<template>
  <div class="nav">
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
  methods: {},
  components: {},
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 50px;
  background: white;
  border-bottom: 2px #ebe8e3 solid;
}
.nav ul {
  display: flex;
  text-align: center;
  height: 50px;
  align-items: center;
}
.nav ul li {
  flex: 1;
  height: 40px;
}
.nav ul li.active {
  color: skyblue;
}
.nav ul i {
  font-size: 20px;
}
.nav ul p {
  font-size: 12px;
  line-height: 18px;
}
</style>
