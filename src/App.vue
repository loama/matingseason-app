<template>
  <div id="app" v-bind:class="device.platform">
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
  },
  data () {
    return {
      device: ''
    }
  },
  methods: {
    onDeviceReady () {
      console.log("navigator.geolocation works well")
      navigator.geolocation.getCurrentPosition(this.onSuccess, this.onError)

      // var watchId = navigator.geolocation.watchPosition(geolocationSuccess, geolocationError)
    },
    onSuccess (position) {
      console.log(position.coords)
      store.commit('locationUpdate', position.coords)
    },
    onError (error) {
      alert(error.code)
      alert(error.message)
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
    margin: 0
    overflow-x: hidden
</style>
