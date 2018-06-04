import * as type from './mutations-types'
import { IAluno, IAlunoState } from '@/interfaces/i-aluno'

export default {
  [type.SET_LIST_ALUNOS](state: IAlunoState, lista: IAluno[]) {
    state.alunos = lista
  },
}
