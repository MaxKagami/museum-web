import { contentCollection } from '@/firebase'

export default {
  // namespaced: true,
  state: { links: {} },
  getters: {
    VK: state => { return state.links.vk },
    ZOOM: state => { return state.links.zoom },
    PRIZE: state => { return state.links.price }
  },
  mutations: { setLinks(state, val) { state.links = val } },
  actions: {
    async getLinks () {
      await contentCollection.doc("links").get().then(snapshot => {
        if (!snapshot.exists) return
        let data = snapshot.data()
        index.commit('setLinks', data)
      })
    }
  }
}
