<template>
  <div id="search">
    <h1 class="title"> Discover </h1>

    <div class="switch" v-bind:class="{on: on}" v-on:click="connection()">
      <div class="indicator"></div>
    </div>

    <div class="disconnected" v-if="!on">
      <h1> Jmm you’re not connected to the matrix </h1>
      <img src="../assets/broken-arrow.png">
    </div>

    <div class="connected" v-if="on">
      <div class="card three" v-if="closeUsers.length > 0" v-bind:class="[closeUsers[0].class, closeUsers[0].hide]">
        {{closeUsers[0].email}}
      </div>

      <div class="card two" v-if="closeUsers.length > 1" v-bind:class="[closeUsers[1].class, closeUsers[0].hide]">
        {{closeUsers[1].email}}
      </div>

      <div class="card one" v-if="closeUsers.length > 3" v-bind:class="[closeUsers[2].class, closeUsers[0].hide]">
        {{closeUsers[2].email}}
      </div>

      <div v-for="(user, index) in closeUsers" v-bind:key="user.id" class="card" v-if="index > 2 && index < amountOfCards" v-bind:class="[user.class, user.hide]">
        {{user.email}}
        {{user.class}}
      </div>

      <div class="button later" v-on:click="later()">
        later
      </div>

      <div class="button arrow" v-on:click="arrow()">
        arrow
      </div>
    </div>

  </div>
</template>

<script>
const axios = require('axios')

import store from '../store.js'

export default {
  computed: {
    account () {
      return store.state.user
    },
    coords () {
      return store.state.coords
    }
  },
  data () {
    return {
      on: false,
      closeUsers: [],
      amountOfCards: 0
    }
  },
  methods: {
    connection () {
      let self = this
      axios.post('https://matingseason-api.herokuapp.com/status', {
        email: this.account.email,
        status: !this.on
      })
        .then(function (response) {
          console.log(response)
          console.log(response.data)
          self.on = !self.on
          self.loadCloseUsers()
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    loadCloseUsers () {
      let self = this
      console.log(self.coords.latitude)
      console.log(self.coords.longitude)
      axios.post('https://matingseason-api.herokuapp.com/closeUsers', {
        lat: self.coords.latitude,
        lng: self.coords.longitude
      })
        .then(function (response) {
          self.closeUsers = response.data.data
          self.amountOfCards = response.data.data.length
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    later () {
      let length = this.amountOfCards
      let self = this
      this.$set(this.closeUsers[length - 1], 'class', 'later')
      setTimeout(function () {
        self.$set(self.closeUsers[length - 1], 'hide', 'hide')
        self.amountOfCards = self.amountOfCards - 1
      }, 300)
      // axios
    },
    arrow () {
      let length = this.amountOfCards
      let self = this
      this.$set(this.closeUsers[length - 1], 'class', 'arrow')
      setTimeout(function () {
        self.$set(self.closeUsers[length - 1], 'hide', 'hide')
        self.amountOfCards = self.amountOfCards - 1
      }, 300)
      // axios
    }
  },
  name: 'search'
}
</script>

<style scoped lang="sass">
  h1.title
    color: #4A4A4A
    font-family: 'hoefler-text-black'
    margin-left: 24px

  .switch
    background: #4A4A4A
    border-radius: 20px
    height: 24px
    position: absolute
    top: 24px
    right: 24px
    transition: all 0.3s
    width: 54px

    .indicator
      background: #D8D8D8
      border-radius: 20px
      box-shadow: 0 1px 3px #6a3093
      height: 24px
      left: 0
      position: absolute
      top: 0
      transform: translate3d(0, 0, 0)
      transition: all 0.3s
      width: 24px

    &.on
      background: #FFF

      .indicator
        background: #FF4A73
        transform: translate3d(40px, 0, 0)

  .disconnected
    margin: 0 auto
    width: 220px

    img
      margin: 64px 0
      width: 220px

    h1
      color: white
      font-size: 18px
      margin-top: 64px

  .connected
    .card
      background: #FFF
      box-shadow: 0 1px 3px 1px rgba(200, 200, 200, 0.1)
      border-radius: 4px
      height: 380px
      left: 0
      margin-left: 24px
      position: absolute
      top: 120px
      transition: all 0.3s
      transform: translate3d(0, 0, 0) rotate3d(0, 0, 0)
      width: calc(100vw - 48px)

      &.three
        background: #FFF
        box-shadow: 0 1px 3px 1px rgba(200, 200, 200, 0.3)
        top: 104px
        left: 16px
        width: calc(100vw - 80px)

      &.two
        background: #FFF
        box-shadow: 0 1px 3px 1px rgba(200, 200, 200, 0.3)
        top: 112px
        left: 8px
        width: calc(100vw - 64px)

      &.one
        background: #FFF
        box-shadow: 0 1px 3px 1px rgba(200, 200, 200, 0.3)
        top: 120px

      &.later
        transform: translate3d(-100vw, 40px, 0) rotate3d(-1, 0, 0, 45deg)

      &.arrow
        transform: translate3d(100vw, 40px, 0) rotate3d(1, 0, 0, 45deg)

      &.hide
        display: none

    .button.later
      border-radius: 50%
      box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1)
      height: 56px
      left: 56px
      position: absolute
      top: 600px
      width: 56px

    .button.arrow
      border-radius: 50%
      box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.1)
      height: 56px
      position: absolute
      top: 600px
      right: 56px
      width: 56px

  .user
    background: #FFF
    border-radius: 8px
    height: 56px
    margin: 8px 32px
    width: calc(100vw - 64px)
</style>
