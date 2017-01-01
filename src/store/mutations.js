export default {
  'INDICADORES_SELECIONADOS' (state, payload) {
    state.tabelasindicadores[payload.numtabela].selected = payload.selecionados
  },
  'NOT_NULL_INDICADORES' (state, numtabela) {
    state.tabelasindicadores[numtabela].selected[0] = true
  },
  'START_SELECAO_INDICADORES' (state, numtabela) {
    var sel = []
    for (var i = 0; i < state.tabelasindicadores[numtabela].dados.N.length; i++) {
      sel.push(false)
    }
    state.tabelasindicadores[numtabela].selected = sel
  }
}
