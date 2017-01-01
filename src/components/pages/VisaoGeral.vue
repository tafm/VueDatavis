<template lang="pug">
	layout
		.middlecontent
			simplebox#grafico1visgeral
				span(slot="title") Gráfico 1  Visão Geral
				|bla
		.rightpanel
			simplebox#painelindicadoresvgeral
				span(slot="title") Indicadores
				tabelaindicadores(tiposelecao="multiplenn", numtabela="0")
</template>

<script>
import Layout from '../../Layout'
import simplebox from '../SimpleBox'
import tabelaindicadores from '../TabelaIndicadores'

export default {
  name: 'visaogeral',
  components: { Layout, simplebox, tabelaindicadores }
}
</script>

<style lang="sass" scoped>
  @import '../../assets/sass/global.sass'
  #grafico1visgeral
  	width: 100%
  	box-sizing: border-box
  #painelindicadoresvgeral
    width: $largurapaineldireito
    box-sizing: border-box
</style>