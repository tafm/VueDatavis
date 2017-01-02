<template lang="pug">
	div.boxgrafico
		span.titulograficos
			slot(name="titulo")
		slot
</template>

<script>
  export default {
    name: 'boxgraficos'
  }
</script>

<style lang="sass" scoped>
  .boxgrafico
    .titulograficos
      text-align: center
      display: block
      width: 100%
      float: left
      font-family: arial
      h3
        box-sizing: border-box
        margin-top: 0px
        margin-bottom: 0px
        padding-top: 0.5em
        height 20px
</style>