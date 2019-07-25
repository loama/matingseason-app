<template>
  <div id="loginPage">
    login
  </div>
</template>

<script>
export default {
  data () {
    return {
      hide: false
    }
  },
  methods: {
    login () {
      this.hide = true
      // document.getElementById('login-email').focus()
    }
  },
  name: 'loginPage'
}
</script>

<style scoped lang="sass">
  #loginPage
    background: red
    height: 100vh
    width: 100vw
</style>
