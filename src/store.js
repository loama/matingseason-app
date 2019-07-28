const axios = require('axios')
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
      console.log(state.user.id)
      if (state.user.id !== undefined && state.user.id !== null) {
        axios.post('https://matingseason-api.herokuapp.com/location', {
          id: state.user.id,
          lat: state.coords.latitude,
          lng: state.coords.longitude
        })
          .then(function (response) {
            console.log(response)
            console.log(response.data)
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    }
  },
  actions: {}
})
