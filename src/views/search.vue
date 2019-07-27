<template>
  <div id="search">

    <div class="switch" v-bind:class="{on: on}" v-on:click="on = !on">
      <div class="indicator"></div>
    </div>

    <div class="disconnected" v-if="!on">
      <h1> Jmm your’e not connectd to the matrix </h1>
      <img src="../assets/broken-arrow.png">
    </div>

    <div class="connected" v-if="on">
      <h2> Here are the closest ones </h2>
      <p> Swipe to show your interest. </p>
    </div>

    {{coords.latitude}}
    {{coords.longitude}}

  </div>
</template>

<script>
import store from '../store.js'

export default {
  computed: {
    coords () {
      return store.state.coords
    }
  },
  data () {
    return {
      on: false
    }
  },
  methods: {},
  name: 'search'
}
</script>

<style scoped lang="sass">
  .switch
    background: #4F224A
    border-radius: 20px
    height: 24px
    margin: 0 calc(50vw - 40px)
    position: relative
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
      .indicator
        background: #6a3093; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #505297, #8d4dd1); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #505297, #8d4dd1); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
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
</style>
