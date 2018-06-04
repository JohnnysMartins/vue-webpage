import { Commit, Dispatch } from 'vuex'
import { IAluno } from '@/interfaces/i-Aluno'

import * as type from './mutations-types'


// export const setAllAlunos = ({ commit }: { commit: Commit }, { alunos }: { alunos: IAluno }) => {
//   commit(type.SET_LIST_ALUNOS, alunos)
// }

export default {
  setAllAlunos({ commit }: { commit: Commit }, { alunos }: { alunos: IAluno }) {
    commit(type.SET_LIST_ALUNOS, alunos)
  },
}
