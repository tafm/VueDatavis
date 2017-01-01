<template lang="pug">
  div.container
    h1.titulo
      slot.titulo(name="title")
    div
      slot
</template>

<script>
  export default {
    name: 'simplebox'
  }
</script>

<style lang="sass" scoped>
  @import '../assets/sass/global.sass'
  div.container
    border: 1px solid $cortitulobox
    .titulo
      background-color: $cortitulobox
      margin: 0px
      font-family: arial
      font-size: 16px
      color: #FFFFFF
      padding: 5px
</style>