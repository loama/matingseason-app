<template>
  <div id="loginPage" v-bind:class="{hide: hide}">

    <form v-on:submit.prevent="login">
      <h1>MatingSeason</h1>
      <input type="email">
      <input type="password">
      <input type="submit">
    </form>

  </div>
</template>

<script>
import store from '../store.js'

export default {
  computed: {
    hide () {
      let loggedIn = store.state.loggedIn
      return loggedIn
    }
  },
  data () {
    return {}
  },
  methods: {
    login () {
      this.hide = true

      let user = {}
      store.commit('login', user)
      // document.getElementById('login-email').focus()
    }
  },
  name: 'loginPage'
}
</script>

<style scoped lang="sass">
  #loginPage
    background: gray
    height: 100vh
    left: 0
    position: absolute
    top: 0
    width: 100vw
    z-index: 100

    &.hide
      visibility: hidden

    form
      margin: 0 auto
      padding: 8px
      width: 240px

      input
        display: block
        margin: 8px
        height: 32px
        width: 234px

        &[type="submit"]
          border: none
          border-radius: 8px
          height: 48px
          margin-top: 32px
          outline: none
          width: 240px
</style>
