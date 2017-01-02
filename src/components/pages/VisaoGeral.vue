<template lang="pug">
	layout
		.middlecontent
			simplebox#grafico1visgeral
				span(slot="title") ...
				graficobarrasnvd3(idgrafico="1", tabelawatch="0", dados="graficogeral1")
					|Média dos indicadores
		.rightpanel
			simplebox#painelindicadoresvgeral
				span(slot="title") Indicadores
				tabelaindicadores(tiposelecao="multiple", numtabela="0")
</template>

<script>
import Layout from '../../Layout'
import simplebox from '../SimpleBox'
import tabelaindicadores from '../TabelaIndicadores'
import boxgraficos from '../BoxGraficos'
import graficobarrasnvd3 from '../GraficoBarrasNVD3'

export default {
  name: 'visaogeral',
  components: { Layout, simplebox, tabelaindicadores, boxgraficos, graficobarrasnvd3 }
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