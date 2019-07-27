import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loggedIn: false,
    user: {},
    coords: {
      latitude: null,
      longitude: null
    }
  },
  mutations: {
    login (state, payload) {
      console.log(payload)
      console.log('login')
      state.loggedIn = true
      state.user = payload.data
    },
    logout (state) {
      console.log('logout')
      state.loggedIn = false
    },
    locationUpdate (state, payload) {
      state.coords = payload
    }
  },
  actions: {}
})
