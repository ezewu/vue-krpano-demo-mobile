// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Krpano from 'vue-krpano'
import preview from 'vue-photo-preview'

import 'vue-photo-preview/dist/skin.css'
import '#/stylus/index'

Vue.config.productionTip = false
let options = {
  captionEl: false,
  shareEl: false,
  fullscreenEl: false,
  timeToIdle: 4000
}

Vue.use(Krpano)
Vue.use(preview, options)
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
