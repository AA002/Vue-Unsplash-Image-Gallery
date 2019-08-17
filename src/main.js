import Vue from 'vue'
import App from './App.vue'
import Unsplash from 'unsplash-js'
import axios from 'axios'
import infiniteScroll from 'vue-infinite-scroll'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const unsplash = new Unsplash({
  applicationId: "348761e2145b9d9cb59f8e45b9b2c1df39af361470c6c89d8c39eb3212dec5d5",
})

Vue.use(infiniteScroll)
Vue.config.productionTip = false
Vue.prototype.$unsplash = unsplash
Vue.prototype.$axios = axios

new Vue({
  render: h => h(App),
}).$mount('#app')
