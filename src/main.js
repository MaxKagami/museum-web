//\\//\\//\\ LIBRARIES //\\//\\//\\
import "vue-awesome/icons"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import BootstrapVue from "bootstrap-vue"
import Vicon from "vue-awesome/components/Icon"
import Vue from 'vue'

//\\//\\//\\ MODULES //\\//\\//\\
import router from "./router"
import store from "./stores"
import { auth } from "./firebase"

//\\//\\//\\ COMPONENTS //\\//\\//\\
import App from "./App.vue"
import Admin from "./views/admin"
import Public from "./views/public"

Vue.config.productionTip = false
Vue.component('admin', Admin)
Vue.component('public', Public)
Vue.component('v-icon', Vicon)
Vue.use(BootstrapVue)

let app
auth.onAuthStateChanged(user => {
  if (!app) {
    new Vue({
      router,
      store,
      render: h => h(App),
    }).$mount('#app')
  }
  if (user) {
    index.dispatch('fetchUserProfile', user)
  }
})
