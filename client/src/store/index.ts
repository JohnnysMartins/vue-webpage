import Vue from 'vue'
import Vuex from 'vuex'

import aluno from './aluno/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    aluno,
  },
  strict: true,
})
