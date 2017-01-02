export default {
  'INDICADORES_SELECIONADOS' (state, payload) {
    state.tabelasindicadores[payload.numtabela].selected = payload.selecionados
  },
  'NOT_NULL_INDICADORES' (state, numtabela) {
    state.tabelasindicadores[numtabela].selected[0] = true
  }
}
