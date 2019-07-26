<template>
  <div id="account">
    <div class="profile-pic"></div>
    <div class="name"> user name </div>

    <div class="logout" v-on:click="logout()">logout</div>
  </div>
</template>

<script>
import store from '../store.js'

export default {
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
  .logout
    border: 1px solid black
    bottom: 20px
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
