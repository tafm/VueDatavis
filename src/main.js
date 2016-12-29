// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/store'

import VisaoGeral from 'components/pages/VisaoGeral'
import AnaliseDesempenho from 'components/pages/AnaliseDesempenho'
import AnaliseEvasao from 'components/pages/AnaliseEvasao'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: VisaoGeral },
  { path: '/visao-geral', component: VisaoGeral },
  { path: '/analise-de-desempenho', component: AnaliseDesempenho },
  { path: '/analise-de-evasao', component: AnaliseEvasao }
]

const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  store,
  router
}).$mount('#app')
