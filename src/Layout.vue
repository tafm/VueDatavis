<template lang="pug">
 #app
  #header
    #logo
      img(src="static/img/datavis.png")
    #titlemenu
      #title
        span.title {{ disciplina }}
        span.subtitle {{ semestre }}
      #menu
        ul
          li
             router-link(to="/visao-geral") Visão Geral
          li
             router-link(to="/analise-de-desempenho") Análise de desempenho
          li
             router-link(to="/analise-de-evasao") Análise de evasão
  #container
    #studentsleft
      table
        thead
          tr
            th Alunos
        tbody
          tr(v-for="aluno in alunos")
            td {{aluno.nome}}
    #content
      slot
</template>

<script>
export default {
  name: 'layout',
  components: {
  },
  computed: {
    disciplina () {
      return this.$store.state.disciplina
    },
    semestre () {
      return this.$store.state.semestre
    },
    alunos () {
      return this.$store.state.metricas.alunos
    }
  }
}
</script>

<style lang="sass">
  @import 'assets/sass/global.sass'
  html
    height: 100%;
  body
    margin: 0px
    height: 100%;
    #app
      width: 100%
      height: 100%
      #header
        #logo
          background-color: #CCCCCC
          height: $alturaheader
          width: $largurapainelesquerdo
          float: left
          text-align: center
          img
            margin-top: 18px
        #titlemenu
          width: calc(100% - $largurapainelesquerdo)
          background-color: $corbgheader
          height: $alturaheader
          #title
            margin: 10px 20px
            float: left
            span.title
              color: #FFFFFF
              font-size: 30px
              font-family: arial
              display: block
            span.subtitle
              color: #FF6600
              font-size: 20px
              font-family: arial
              display: block
          #menu
            float: right
            ul
              list-style: none
              margin: 0px
              li
                display: inline-block
                a
                  display: block
                  height: $alturaheader
                  padding: 0px 10px
                  box-sizing: border-box
                  line-height: $alturaheader
                  color: #D4D0C8
                  text-decoration: none
                  font-family: arial
                a.router-link-active
                  color: #FFFFFF
                  background-color: #5E5E5E
                  border-bottom: 4px solid #EB6B56
                a.router-link-active:hover
                  background-color: #5E5E5E
                a:hover
                  background-color: #3C3C3C
      #container
        width: 100%
        height: calc(100% - #{$alturaheader})
        background-color: $cortitulobox
        #studentsleft
          background-color: $cortitulobox
          width: $largurapainelesquerdo
          float: left
          table
            width: 100%
            border-spacing: 0px
            thead
              tr
                background-color: #666666
                color: #FFFFFF
                text-align: left
                th
                  font-family: arial
                  padding: 10px
                  box-sizing: border-box
            tbody
              tr
                color: #FFFFFF
                font-family: arial
                td
                  padding: 5px 0px 5px 10px
                td:hover
                  background-color: lighten($cortitulobox, 10%)
        #content
          width: calc(100% - #{$largurapainelesquerdo})
          min-height: 100%
          background-color: #FFFFFF
          float: left
</style>
