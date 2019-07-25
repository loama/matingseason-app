<template>
  <div id="app" v-bind:class="device.platform">
    <login-page />

    <router-view />
  </div>
</template>

<script>
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
</style>
