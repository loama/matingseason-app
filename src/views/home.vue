<template>
  <div id="home">
    <div class="header">
      <div class="switch"></div>
    </div>
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
      width: 100vw

      .switch
        background: #F0F0F0
        border-radius: 20px
        height: 40px
        left: calc(50vw - 60px)
        position: absolute
        top: 8px
        width: 120px
</style>
