<template>
  <div id="home">
    <div class="header" v-bind:class="section">
      <div class="section" v-bind:class="{active: section === 'account'}" v-on:click="section = 'account'">
        <img class="light" src="../assets/user.svg">
        <img class="full" src="../assets/user-pink.svg">
      </div>

      <div class="section" v-bind:class="{active: section === 'search'}" v-on:click="section = 'search'">
        <img class="full" src="../assets/arrow-up-pink.svg">
        <img class="light" src="../assets/arrow-up.svg">
      </div>

      <div class="section" v-bind:class="{active: section === 'matches'}" v-on:click="section = 'matches'">
        <img class="light" src="../assets/arrows.svg">
        <img class="full" src="../assets/arrows-pink.svg">
      </div>
    </div>

    <img src="../assets/path-2.svg" class="path-2">

    <div class="pages" v-bind:class="section">

      <div class="page account">
        <account />
      </div>

      <div class="page search">
        <search />
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
import search from './search'

export default {
  components: {
    'account': account,
    'matches': matches,
    'search': search
  },
  data () {
    return {
      hide: false,
      section: 'account'
    }
  },
  methods: {
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
      bottom: 0
      height: 56px
      left: 0
      padding: 0 33vw
      position: fixed
      transform: translate3d(-33vw, 0, 0)
      transition: all 0.3s
      width: 166vw
      z-index: 10

      &.account
        transform: translate3d(0, 0, 0)

      &.search
        transform: translate3d(-33vw, 0, 0)

      &.matches
        transform: translate3d(-66vw, 0, 0)

      .section
        cursor: pointer
        display: inline-block
        height: 56px
        line-height: 56px
        margin-right: -4px
        position: relative
        text-align: center
        width: 33.33vw

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
            opacity: 0
            width: 24px

          img.full
            opacity: 1
            width: 24px

    img.path-2
      left: 0
      position: fixed
      top: 0
      width: 100vw

    .pages
      background: #FFF
      height: calc(100vh - 56px)
      left: 0
      max-width: 100vw
      position: absolute
      top: 0
      transform: translate3d(0, 0, 0)
      transition: all 0.3s
      vertical-align: top

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
          left: 0

        &.search
          left: 100vw

        &.matches
          left: 200vw

</style>
