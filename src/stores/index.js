import Vue from "vue"
import Vuex from "vuex"
import * as fb from "@/firebase"
import router from "@/router"
import modules from "./modules"

Vue.use(Vuex)
export default new Vuex.Store({
  modules: modules,
  state: { userProfile: {} },
  getters: {},
  mutations: { setUserProfile(state, val) { state.userProfile = val } },
  actions: {
    async fetchUserProfile({ commit }, user) {
      const userProfile = await fb.usersCollection.doc(user.uid).get()
      commit('setUserProfile', userProfile.data())
      if (router.currentRoute.path === '/login') {
        router.push('/admin')
      }
    },
    async login({ dispatch }, form) {
      const { user } = await fb.auth.signInWithEmailAndPassword(form.email, form.password)
      dispatch('fetchUserProfile', user)
    },
    async logout({ commit }) {
      await fb.auth.signOut()
      commit('setUserProfile', {})
      router.push('/')
    }
  }
  // modules: {
  //   admin: () => import("./modules/admin"),
  //   links: () => import("./modules/links"),
  //   main: () => import("./modules/main"),
  //   prices: () => import("./modules/prices")
  // }
})
