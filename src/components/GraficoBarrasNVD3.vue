<template lang="pug">
	boxgraficos
		h3(slot="titulo")
			slot
		div.d3barras(v-bind:id=" 'graficobarras-' + this.idgrafico")
</template>

<script>
  import boxgraficos from './BoxGraficos'

  export default {
    name: 'graficobarrasnvd3',
    components: { boxgraficos },
    props: ['idgrafico', 'tabelawatch', 'dados'],
    computed: {
      indicadores () {
        return this.$store.state.tabelasindicadores[this.tabelawatch].selected
      }
    },
    methods: {
      draw () {
        var opts = {
          'dom': 'chart77e0689a1b8e',
          'x': 'Indicador',
          'y': 'Média',
          'title': 'Média dos indicadores geral',
          'type': 'multiBarHorizontalChart',
          'id': 'graficobarras-' + this.idgrafico
        }

        var data = this.$store.getters[this.dados]

        document.getElementById(opts.id).innerHTML = ''

        if (!(opts.type === 'pieChart' || opts.type === 'sparklinePlus' || opts.type === 'bulletChart')) {
          data = d3.nest().key(function (d) {
            return opts.group === undefined ? opts.y : d[opts.group]
          }).entries(data)
        }
        if (opts.disabled !== undefined) {
          data.map(function (d, i) {
            d.disabled = opts.disabled[i]
          })
        }

        nv.addGraph(function () {
          var chart = nv.models[opts.type]()
          .width(opts.width)
          .height(opts.height)

          if (opts.type !== 'bulletChart') {
            chart.x(function (d) { return d[opts.x] }).y(function (d) { return d[opts.y] })
          }

          chart
          .showControls(false)
          .tooltipContent(function (key, x, y) { return '<h3>Indicador ' + x + ' - Média: </h3><h4><p>' + y + '</p></h4>' })

          d3.select('#' + opts.id)
          .append('svg')
          .datum(data)
          .transition().duration(500)
          .call(chart)

          nv.utils.windowResize(chart.update)
          return chart
        })
      }
    },
    mounted () {
      this.draw()
      this.ready = true
    },
    watch: {
      'indicadores' () {
        console.log('mudou')
        this.draw()
        console.log(this.$store.getters.graficogeral1)
      }
    }
  }
</script>

<style lang="sass">
  .d3barras
    height: 400px
    svg
      margin: 0px
      padding: 0px
      height: calc(100% - 20px)
      width: 100%
</style>