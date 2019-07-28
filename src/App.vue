<template>
  <div id="app" class="not-selectable" v-bind:class="device.platform">
    <login-page />

    <router-view />
  </div>
</template>

<script>
import store from 'store'
import router from 'router'

import loginPage from './views/loginPage'

export default {
  components: {
    'login-page': loginPage
  },
  computed: {
    account () {
      return store.state.user
    }
  },
  data () {
    return {
      device: ''
    }
  },
  methods: {
    onDeviceReady () {
      console.log("navigator.geolocation works well")
      // navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError)
      navigator.geolocation.watchPosition(this.onSuccess, this.onError, { maximumAge: 3000, timeout: 5000, enableHighAccuracy: true } )
    },
    onSuccess (position) {
      console.log(position.coords)
      store.commit('locationUpdate', position.coords)
    },
    onError (error) {
      console.log(error.code)
      console.log(error.message)
    }

  },
  mounted () {
    document.addEventListener("deviceready", this.onDeviceReady, false)
  },
  name: 'home'
}
</script>

<style lang="sass">
  html, body
    font-family: Arial
    margin: 0
    max-width: 100vw
    overflow-x: hidden
    position: fixed

    @font-face
      font-family: 'hoefler-text-black'
      src: url('assets/font/HoeflerTextBlack.ttf')

  .not-selectable
    -webkit-touch-callout: none
    -webkit-user-select: none
    -khtml-user-select: none
    -moz-user-select: none
    -ms-user-select: none
    user-select: none
</style>
