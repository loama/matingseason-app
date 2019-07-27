<template>
  <div id="loginPage" v-bind:class="{hide: hide}">

    <img class="logo" src="../assets/logo.png">
    <img class="name" src="../assets/MatingSeason.png">

    <form v-on:submit.prevent="login">
      <input type="email" placeholder="email">
      <input type="password" placeholder="password">
      <input type="submit" value="Log In">
    </form>

  </div>
</template>

<script>
import store from '../store.js'

export default {
  computed: {
    hide () {
      let loggedIn = store.state.loggedIn
      return loggedIn || false
    }
  },
  data () {
    return {}
  },
  methods: {
    login () {
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
    background-image: radial-gradient(#3A3A3A, #1A1A1A)
    height: 100vh
    left: 0
    position: absolute
    top: 0
    width: 100vw
    z-index: 100

    &.hide
      visibility: hidden

    .logo
      margin: 40px calc(50vw - 100px) 16px calc(50vw - 100px)
      width: 200px

    .name
      margin: 12px calc(50vw - 72px)
      width: 144px

    form
      margin: 0 auto
      padding: 8px
      width: 294px

      .title
        font-size: 40px
        display: block
        text-align: center
        width: 100%

      input
        border: none
        border-radius: 24px
        height: 44px
        font-size: 14px
        margin: 8px
        outline: none
        padding: 0 32px
        width: 212px

        &[type="submit"]
          background: purple
          border: none
          border-radius: 24px
          color: #FFF
          cursor: pointer
          font-size: 20px
          height: 48px
          margin-left: 24px
          margin-top: 32px
          outline: none
          width: 240px
</style>
