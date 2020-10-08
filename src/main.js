import Vue from 'vue'
import App from './App.vue'
import router from "./router"
import store from "./store"
import request from "./utils/request"
Vue.config.productionTip = false

Vue.prototype.$http = request
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
