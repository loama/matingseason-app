<template>
  <div id="loginPage" v-bind:class="{hide: hide}">

    <img class="path" src="../assets/path-login.svg">
    <img class="rabbit" src="../assets/rabbit-shape.png">

    <form v-on:submit.prevent="login()">
      <h1 class="title"> Login </h1>

      <div class="input">
        <input type="email"
               v-model="email"
               @focus="emailFocused = true"
               @blur="emailFocused = false"
               >
        <div v-bind:class="{focused: emailPlaceholderUp}" class="placeholder">email</div>
      </div>

      <div class="input">
        <input type="password"
               v-model="password"
               @focus="passwordFocused = true"
               @blur="passwordFocused = false">
        <div class="placeholder" v-bind:class="{focused: passwordPlaceholderUp}">password</div>
      </div>

      <input type="submit" value="Login">
    </form>

    <div class="register">
      <div v-on:click="register = true"><span>New User?</span> Register</div>
    </div>

    <register v-if="register"/>

    <div v-if="register" v-on:click="register = false" class="backlogin"> back to login </div>

  </div>
</template>

<script>
const axios = require('axios')

import store from '../store.js'

import register from './register'

export default {
  components: {
    'register': register
  },
  computed: {
    hide () {
      let loggedIn = store.state.loggedIn
      return loggedIn || false
    },
    emailPlaceholderUp () {
      if (this.email.length > 0 || this.emailFocused) {
        return true
      } else {
        return false
      }
    },
    passwordPlaceholderUp () {
      if (this.password.length > 0 || this.passwordFocused) {
        return true
      } else {
        return false
      }
    }
  },
  data () {
    return {
      email: '',
      emailFocused: false,
      password: '',
      passwordFocused: false,
      register: false
    }
  },
  methods: {
    login () {
      let self = this
      axios.post('https://matingseason-api.herokuapp.com/login', {
        email: this.email,
        password: this.password
      })
        .then(function (response) {
          console.log(response)
          console.log(response.data)
          store.commit('login', response.data)
        })
        .catch(function (error) {
          console.log(error)
        })
      // document.getElementById('login-email').focus()
    }
  },
  name: 'loginPage'
}
</script>

<style scoped lang="sass">
  #loginPage
    background: #FFF
    height: 100vh
    left: 0
    position: absolute
    top: 0
    width: 100vw
    z-index: 100

    img.path
      left: 0
      position: absolute
      top: 0
      width: 100vw

    img.rabbit
      left: 0
      margin: 0 10vw
      position: absolute
      top: 0
      width: 80vw
      z-index: 1

    &.hide
      visibility: hidden

    form
      background: #FFF
      border-radius: 8px
      box-shadow: 0 20px 50px 0 rgba(0, 0, 0, 0.1)
      margin: 28vh auto 0 auto
      padding: 8px
      position: relative
      width: calc(100vw - 32px)
      z-index: 2

      .title
        font-family: 'hoefler-text-black'
        font-size: 28px
        display: block
        padding-left: 16px
        text-align: left
        width: 100%

      div.input
        position: relative

        .placeholder
          color: #959595
          left: 16px
          pointer-events: none
          position: absolute
          top: 24px
          transition: all 0.3s
          transform: translate3d(0, 0, 0) scale3d(1, 1, 1)

          &.focused
            transform: translate3d(0, -24px, 0) scale3d(0.8, 0.8, 1)

      input
        border: none
        border-bottom: 1px solid #D8D8D8
        background: #FFF
        height: 44px
        font-size: 14px
        margin: 8px 8px 16px 8px
        outline: none
        padding: 0 16px
        width: calc(100vw - 80px)

        &[type="submit"]
          background: #FF4A73
          border: none
          border-radius: 24px
          color: #FFF
          cursor: pointer
          font-size: 20px
          height: 48px
          margin-left: 24px
          margin-top: 32px
          outline: none
          width: calc(100vw - 80px)

    .register
      text-align: center
      width: 100%

      span
        color: #959595
        margin-top: 12px

      div
        color: #FF4A73
        margin-top: 20px

    .backlogin
      bottom: 32px
      left: 32px
      position: absolute
      z-index: 100
</style>
