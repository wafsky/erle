<template>
  <div class="container">弹出层</div>
</template>

<script>
export default {
  name: "Alert",

  data() {
    return {};
  },
  created() {},
  methods: {},
  components: {},
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  color: #fff;
  text-align: center;
}
</style>
