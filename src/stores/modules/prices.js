import { contentCollection } from '@/firebase'

export default {
  // namespaced: true,
  state: { prices: {} },
  getters: {
    PRICE_ADULT: state => { return state.prices.adult },
    PRICE_CHILD: state => { return state.prices.child }
  },
  mutations: { setPrices(state, val) { state.prices = val } },
  actions: {
    async getPrices() {
      await contentCollection.doc("prices").get().then(snapshot => {
        if (!snapshot.exists) return
        let data = snapshot.data()
        index.commit('setPrices', data)
      })
    }
  }
}
