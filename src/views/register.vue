<template>
  <div id="register">
    <h1>REGISTRATION</h1>

    <div class="section one">
      <form>
        <div> Fill in your details </div>
        <input type="text" placeholder="Username" v-model="username">
        <input type="email" placeholder="Email" v-model="email">
        <input type="number" placeholder="Age" v-model="age">
        <input type="text" placeholder="Password" v-model="password">
      </form>
    </div>

    <div class="section two">
    </div>

    <div class="section three">
    </div>

    <div class="success" v-if="registered">
      Correctly registered, login in automatically in {{numberOfSeconds}} seconds
    </div>

    <div class="position">
      <div class="dot one"></div>
      <div class="dot two"></div>
      <div class="dot three"></div>
    </div>

    <img class="arrow-right" src="../assets/arrow-right.svg" v-bind:class="{active: canRegister}" v-on:click="register()">
  </div>
</template>

<script>
const axios = require('axios')

import store from '../store.js'

export default {
  computed: {
    validUsername () {
      return this.username.length > 4
    },
    validEmail () {
      var re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      return re.test(String(this.email).toLowerCase())
    },
    validAge () {
      return this.age > 17
    },
    validPassword () {
      return this.password.length > 5
    },
    canRegister () {
      return (this.validUsername && this.validEmail && this.validAge && this.validPassword)
    }
  },
  components: {
  },
  data () {
    return {
      username: '',
      email: '',
      age: '',
      password: '',
      registered: false,
      numberOfSeconds: 3
    }
  },
  methods: {
    register () {
      let self = this
      axios.post('https://matingseason-api.herokuapp.com/register', {
        username: '',
        email: this.email,
        age: '',
        password: this.password
      })
        .then(function (response) {
          self.registered = true
          console.log(response)
          console.log(response.data)
          setInterval(function () {
            if (self.numberOfSeconds === 0) {
              store.commit('login', response.data)
            } else {
              self.numberOfSeconds = self.numberOfSeconds - 1
            }
          }, 1000)
        })
        .catch(function (error) {
          console.log(error)
        })
    }
  },
  name: 'register'
}
</script>

<style scoped lang="sass">
  #register
    background-image: linear-gradient(45deg, #FF008A, #1C4266)
    height: 100vh
    left: 0
    position: absolute
    top: 0
    width: 100vw

    h1
      color: #FFF
      padding: 32px

    form
      background: #FFF
      border-radius: 16px
      margin: 0 auto
      padding: 16px 0
      text-align: center
      width: calc(100vw - 64px)

      div
        margin: 16px 0 32px 0

      input
        border: 1px solid #F0F0F0
        border-radius: 16px
        display: block
        height: 32px
        margin: 8px auto
        outline: none
        padding: 0 16px
        width: calc(100vw - 128px)

    .success
      background: #FFF
      border-radius: 16px
      height: 264px
      left: 32px
      line-height: 256px
      position: absolute
      text-align: center
      top: 144px
      width: calc(100vw - 64px)

    .arrow-right
      bottom: 32px
      height: 65px
      opacity: 0.2
      pointer-events: none
      position: absolute
      right: 32px
      width: 65px

      &.active
        opacity: 1
        pointer-events: all
</style>
