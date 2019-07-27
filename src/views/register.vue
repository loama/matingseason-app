<template>
  <div id="register">
    <h1>REGISTRATION</h1>

    <div class="section one">
      <form>
        <div> Fill in your details </div>
        <input type="text" placeholder="Username">
        <input type="email" placeholder="Email">
        <input type="number" placeholder="Age">
        <input type="text" placeholder="Password">
      </form>
    </div>

    <div class="section two">
    </div>

    <div class="section three">
    </div>

    <div class="position">
      <div class="dot one"></div>
      <div class="dot two"></div>
      <div class="dot three"></div>
    </div>

    <img class="arrow-right" src="../assets/arrow-right.svg">
  </div>
</template>

<script>

export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
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

    .arrow-right
      bottom: 32px
      height: 65px
      position: absolute
      right: 32px
      width: 65px
</style>
