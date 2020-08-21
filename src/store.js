import Vue from 'vue'
import Vuex from 'vuex'
import * as fb from './firebase'
import router from  './router'

Vue.use(Vuex)

fb.contentCollection.doc("main").get().then(snapshot => {
  if (!snapshot.exists) return
  let data = snapshot.data()
  store.commit('setMain', data)
})
fb.contentCollection.doc("admin").get().then(snapshot => {
  if (!snapshot.exists) return
  let data = snapshot.data()
  store.commit('setAdmin', data)
})
fb.contentCollection.doc("prices").get().then(snapshot => {
  if (!snapshot.exists) return
  let data = snapshot.data()
  store.commit('setPrices', data)
})
fb.contentCollection.doc("links").get().then(snapshot => {
  if (!snapshot.exists) return
  let data = snapshot.data()
  store.commit('setLinks', data)
})

const store = new Vuex.Store({
  state: { userProfile: {}, main: {}, admin: {}, prices: {}, links: {} },
  getters: {
    ADDRESS: state => { return state.main.address },
    CITY: state => { return state.main.city },
    DATE_FROM: state => { return state.main.date_from },
    DATE_TO: state => { return state.main.date_to },
    HOURS: state => { return state.main.hours },
    INSTAGRAM: state => { return state.main.instagram },
    LOCATION: state => { return state.main.location },
    PHONE: state => { return state.main.phone },
    POINT: state => { return state.main.point },

    VK: state => { return state.links.vk },
    ZOOM: state => { return state.links.zoom },
    PRIZE: state => { return state.links.prize },

    EMAIL: state => { return state.admin.email },
    NAME: state => { return state.admin.name },
    ADMIN_PHONE: state => { return state.admin.phone },

    ADULT: state => { return state.prices.adult },
    CHILD: state => { return state.prices.child },

  },
  mutations: {
    setUserProfile(state, val) { state.userProfile = val },
    setMain(state, val) { state.main = val },
    setAdmin(state, val) { state.admin = val },
    setPrices(state, val) { state.prices = val },
    setLinks(state, val) { state.links = val }
  },
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
})

export default store
