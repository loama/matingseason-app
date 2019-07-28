<template>
  <div id="account">
    <h1 class="title"> Account </h1>
    <div class="profile-pic"></div>
    <div class="name"> user name </div>

    <div class="logout" v-on:click="logout()">logout</div>
  </div>
</template>

<script>
import store from '../store.js'

export default {
  computed: {
    user () {
      return store.state.user
    }
  },
  data () {
    return {
    }
  },
  methods: {
    logout () {
      store.commit('logout')
    }
  },
  name: 'account'
}
</script>

<style scoped lang="sass">
  h1.title
    color: #4A4A4A
    font-family: 'hoefler-text-black'
    margin-left: 24px

  .logout
    background: #FFF
    bottom: 20px
    border-radius: 4px
    color: red
    position: absolute
    height: 56px
    line-height: 56px
    left: calc(50% - 60px)
    text-align: center
    width: 120px

  .profile-pic
    background: gray
    border-radius: 50%
    height: 80px
    margin: 20px auto
    width: 80px

  .name
    text-align: center
    width: 100%
</style>
