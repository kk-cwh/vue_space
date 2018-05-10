// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant'
import 'vant/lib/vant-css/index.css'

<<<<<<< HEAD
Vue.use(Vant)
=======
import Mint from 'mint-ui'
Vue.use(Mint)

>>>>>>> 07aa3aaf0a96bfba3a5854be4301c3f73d4e6ee1
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
