import state from './state.js'

export default {
  graficogeral1 () {
    var valores = []
    var algumselecionado = false
    for (var i = 0; i < state.tabelasindicadores[0].dados.N.length && !algumselecionado; i++) {
      algumselecionado = state.tabelasindicadores[0].selected[i]
    }
    for (i = 0; i < state.tabelasindicadores[0].dados.N.length; i++) {
      var indicador = state.metricas.alunos.map(aluno => { return aluno.geral[i] })
      var media = 0
      for (var j = 0; j < indicador.length; j++) {
        media += indicador[j]
      }
      media /= indicador.length

      var obj = {
        'Indicador': i + 1,
        'Min': Math.min.apply(null, indicador),
        'Média': media,
        'Max': Math.max.apply(null, indicador)
      }

      if (!algumselecionado) {
        valores.push(obj)
      } else if (state.tabelasindicadores[0].selected[i]) {
        valores.push(obj)
      }
    }

    return valores
  }
}
