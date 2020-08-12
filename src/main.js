import Vue from 'vue'
import App from './App.vue'
import Vicon from 'vue-awesome/components/Icon'
import BootstrapVue from 'bootstrap-vue'

import 'vue-awesome/icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.component('v-icon', Vicon)
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App)
}).$mount('#app')
