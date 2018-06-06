import { Commit, Dispatch } from 'vuex'
import { IAluno } from '@/interfaces/i-aluno'

import * as type from './mutations-types'

export default {
  setAllAlunos({ commit }: { commit: Commit }, { alunos }: { alunos: IAluno[] }) {
    commit(type.SET_LIST_ALUNOS, alunos)
  },
  addAluno({ commit }: { commit: Commit }, { aluno }: { aluno: IAluno }) {
    commit(type.ADD_ALUNO_LIST, aluno)
  },
  setAluno({ commit }: { commit: Commit }, { aluno }: { aluno: IAluno }) {
    commit(type.SET_ALUNO, aluno)
  },
}
