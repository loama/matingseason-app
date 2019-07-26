import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: {}
  },
  mutations: {
    login (state, payload) {
      console.log('login')
      state.loggedIn = true
    },
    logout (state) {
      console.log('logout')
      state.loggedIn = false
    }
  },
  actions: {}
})
