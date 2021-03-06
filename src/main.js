import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Krpano from 'vue-krpano'
import preview from 'vue-photo-preview'

import 'vue-photo-preview/dist/skin.css'
import '#/stylus/index.styl'

Vue.config.productionTip = false
const options = {
  captionEl: false,
  shareEl: false,
  fullscreenEl: false,
  timeToIdle: 4000,
}

Vue.use(Krpano)
Vue.use(preview, options)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
