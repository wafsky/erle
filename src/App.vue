<template>
  <div id="app">
    <Header></Header>
    <Nav></Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header";
import Nav from "./components/Nav";

export default {
  name: "App",
  components: {
    Header,
    Nav
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
}
</style>
