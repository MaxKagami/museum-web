import { contentCollection } from '@/firebase'

export default {
  // namespaced: true,
  state: { main: {} },
  getters: {
    ADDRESS: state => { return state.main.address },
    CITY: state => { return state.main.city },
    DATE_FROM: state => { return state.main.date_from },
    DATE_TO: state => { return state.main.date_to },
    HOURS: state => { return state.main.hours },
    LOCATION: state => { return state.main.location },
    PHONE: state => { return state.main.phone },
    POINT: state => { return state.main.point },
    ZOOM: state => { return state.main.zoom }
  },
  mutations: {
    setMain(state, val) { state.main = val }
  },
  actions: {
    async getMain() {
      await contentCollection.doc("main").get().then(snapshot => {
        if (!snapshot.exists) return
        let data = snapshot.data()
        index.commit("setMain", data)
      })
    }
  }
}
