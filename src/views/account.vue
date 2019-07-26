<template>
  <div id="account">
    account

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
</style>
