import Vue from 'vue'
import App from './App.vue'
import Vicon from 'vue-awesome/components/Icon'
import BootstrapVue from 'bootstrap-vue'
import YandexMap from 'vue-yandex-maps'

import 'vue-awesome/icons'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false
Vue.component('v-icon', Vicon)
Vue.use(BootstrapVue, YandexMap)

new Vue({
  render: h => h(App)
}).$mount('#app')
