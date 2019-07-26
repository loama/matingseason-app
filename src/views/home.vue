<template>
  <div id="home">
    <div class="header" v-bind:class="section">
      <div class="section" v-bind:class="{active: section === 'account'}" v-on:click="section = 'account'">
        <img class="light" src="../assets/cog-light.svg">
        <img class="full" src="../assets/cog-full.svg">
      </div>

      <div class="section" v-bind:class="{active: section === 'search'}" v-on:click="section = 'search'">
        <img class="full" src="../assets/search-full.svg">
        <img class="light" src="../assets/search-light.svg">
      </div>

      <div class="section" v-bind:class="{active: section === 'matches'}" v-on:click="section = 'matches'">
        <img class="light" src="../assets/comments-light.svg">
        <img class="full" src="../assets/comments-full.svg">
      </div>
    </div>

    <div class="pages" v-bind:class="section">
      <div class="page account">
        <account />
      </div>

      <div class="page search">
        <div class="switch" v-bind:class="{on: on}" v-on:click="on = !on">
          <div class="indicator"></div>
        </div>

        <div class="disconnected" v-if="!on">
          you are disconnected
        </div>

        <div class="connected" v-if="on">
          you are connected
        </div>
      </div>

      <div class="page matches">
        <matches />
      </div>
    </div>

  </div>
</template>

<script>
import account from './account'
import matches from './matches'

export default {
  components: {
    'account': account,
    'matches': matches
  },
  data () {
    return {
      hide: false,
      on: false,
      section: 'account'
    }
  },
  methods: {
    login () {
      this.hide = true
      // document.getElementById('login-email').focus()
    }
  },
  name: 'home'
}
</script>

<style scoped lang="sass">
  #home
    height: 100vh
    width: 100vw

    .header
      background: #FFF
      border-bottom: 1px solid #F0F0F0
      height: 56px
      transform: translate3d(0, 0, 0)
      transition: all 0.3s
      width: 100vw

      &.account
        transform: translate3d(33vw, 0, 0)

      &.search
        transform: translate3d(0, 0, 0)

      &.matches
        transform: translate3d(-33vw, 0, 0)

      .section
        cursor: pointer
        display: inline-block
        height: 56px
        line-height: 56px
        margin-right: -4px
        position: relative
        text-align: center
        width: 33.33%

        img
          height: 24px
          position: absolute

          &.light
            left: calc(50% - 12px)
            top: 16px
            width: 16px

          &.full
            left: calc(50% - 12px)
            opacity: 0
            top: 16px
            width: 16px

        &.active
          img.light
            width: 24px
          img.full
            opacity: 0.2
            width: 24px

    .pages
      height: calc(100vh - 56px)
      left: 0
      position: absolute
      top: 56px
      transform: translate3d(0, 0, 0)
      transition: all 0.3s
      vertical-align: top
      width: 300vw

      &.account
        transform: translate3d(0, 0, 0)

      &.search
        transform: translate3d(-100vw, 0, 0)

      &.matches
        transform: translate3d(-200vw, 0, 0)

      .page
        display: inline-block
        height: calc(100vh - 56px)
        margin-left: 0
        position: absolute
        top: 0
        width: 100vw

        &.account
          background: orange
          left: 0

        &.search
          background: blue
          left: 100vw

        &.matches
          background: green
          left: 200vw

    .switch
      background: #F0F0F0
      border-radius: 20px
      height: 40px
      left: calc(50vw - 40px)
      position: absolute
      top: 80px
      width: 80px

      .indicator
        background: #D0D0D0
        border-radius: 20px
        box-shadow: 0 1px 3px #6a3093
        height: 40px
        left: 0
        position: absolute
        top: 0
        transform: translate3d(0, 0, 0)
        transition: all 0.3s
        width: 40px

      &.on
        .indicator
          background: #6a3093; /* fallback for old browsers */
          background: -webkit-linear-gradient(to right, #505297, #8d4dd1); /* Chrome 10-25, Safari 5.1-6 */
          background: linear-gradient(to right, #505297, #8d4dd1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
          transform: translate3d(40px, 0, 0)
</style>
