import { contentCollection } from '@/firebase'

export default {
  // namespaced: true,
  state: { admin: {} },
  getters: {
    EMAIL: state => { return state.admin.email },
    NAME: state => { return state.admin.name },
    ADMIN_PHONE: state => { return state.admin.phone }
  },
  mutations: { setAdmin(state, val) { state.admin = val } },
  actions: {
    async getAdmin() {
      await contentCollection.doc("admin").get().then(snapshot => {
        if (!snapshot.exists) return
        let data = snapshot.data()
        index.commit("setAdmin", data)
      })
    }
  }
}
