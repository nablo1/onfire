import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from './store'
import PortalVue from 'portal-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { Api } from '@/Api'

Vue.use(BootstrapVue)
Vue.use(PortalVue)

Vue.config.productionTip = false
Vue.prototype.$http = Api

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
