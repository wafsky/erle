import Vue from 'vue'
import App from './App.vue'
import router from "./router"
Vue.config.productionTip = false
import request from "./utils/request"
Vue.prototype.$http = request
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
