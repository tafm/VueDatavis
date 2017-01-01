<template lang="pug">
	table
		thead
			tr
				th(v-for="descricao in cabecalho")
					|{{ descricao }}
		tbody
			tr(v-for="(dado, indice) in dados[cabecalho[0]]", v-bind:class="{ selected: selecao[indice] }", @click="seleciona(indice)")
				td(v-for="descricao in cabecalho") {{dados[descricao][indice]}}
</template>

<script>
  export default {
    name: 'tabelaindicadores',
    props: ['tiposelecao', 'numtabela'], // tiposeleção = {none, multiple, single, singlenn, multiplenn}
    computed: {
      dados () {
        var n = Object.assign({}, this.$store.state.tabelasindicadores[0].dados)
        return n
      },
      selecao () {
        if (this.$store.state.tabelasindicadores[this.numtabela].selected.length === 0) {
          this.$store.commit('START_SELECAO_INDICADORES', this.numtabela)
        }
        if (this.tiposelecao === 'singlenn' || this.tiposelecao === 'multiplenn') {
          var nadaselecionado = true
          for (var i = 0; i < this.$store.state.tabelasindicadores[this.numtabela].selected.length && nadaselecionado; i++) {
            nadaselecionado = !this.$store.state.tabelasindicadores[this.numtabela].selected[i]
          }
          if (nadaselecionado) {
            this.$store.commit('NOT_NULL_INDICADORES', this.numtabela)
          }
        }

        return this.$store.state.tabelasindicadores[this.numtabela].selected
      },
      cabecalho () {
        var c = []
        for (var i in this.dados) {
          c.push(i)
        }
        return c
      },
      selecionadosVuex () {
        return this.$store.state.tabelasindicadores[this.numtabela].selected
      }
    },
    methods: {
      seleciona (index) {
        var selecao = Object.assign([], this.selecao)
        var nadaselecionado = true
        for (var i = 0; i < this.dados.N.length && nadaselecionado; i++) {
          nadaselecionado = !this.selecao[i]
        }

        var mudouestado = false

        switch (this.tiposelecao) {
          case 'none':
            return
          case 'single':
            var preselecionado = selecao[index]
            for (i = 0; i < selecao.length; i++) {
              selecao[i] = false
            }
            selecao[index] = !preselecionado
            mudouestado = true
            break
          case 'singlenn':
            mudouestado = !selecao[index]
            for (i = 0; i < selecao.length; i++) {
              selecao[i] = false
            }
            selecao[index] = true
            break
          case 'multiple':
          case 'multiplenn':
            var selecoes = 0
            var selecionado = -1
            for (i = 0; i < this.selecao.length; i++) {
              if (selecao[i]) {
                selecoes++
                selecionado = i
              }
            }
            if (this.tiposelecao !== 'multiplenn' || (selecoes === 1 && index !== selecionado) || selecoes !== 1) {
              mudouestado = true
              selecao[index] = !selecao[index]
            }
            break
        }

        var payload = {
          selecionados: selecao,
          numtabela: this.numtabela
        }

        if (mudouestado) {
          this.$store.commit('INDICADORES_SELECIONADOS', payload)
        }
      }
    },
    watch: {
      'selecionadosVuex' () {
        console.log('mudou')
      }
    }
  }
</script>

<style lang="sass" scoped>
  @import '../assets/sass/global.sass'
  table
    width: 100%
    font-family: arial
    padding: $margensgeral
    box-sizing: border-box
    border-collapse: collapse
    thead
      tr
        th
          padding: 4px
          box-sizing: border-box
          text-align: left
          border-bottom: 1px solid #CCCCCC
    tbody
      tr
        td
          padding: 4px
      tr:hover
        background-color: #f2f7ff
      tr.selected
        background-color: #d0dcef
</style>