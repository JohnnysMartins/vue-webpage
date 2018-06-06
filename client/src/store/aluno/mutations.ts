import * as type from './mutations-types'
import { IAluno, IAlunoState } from '@/interfaces/i-aluno'

export default {
  [type.SET_LIST_ALUNOS](state: IAlunoState, lista: IAluno[]) {
    state.lista = lista
  },
  [type.ADD_ALUNO_LIST](state: IAlunoState, aluno: IAluno) {
    state.lista.push(aluno)
  },
  [type.SET_ALUNO](state: IAlunoState, aluno: IAluno) {
    state.aluno = aluno
  },
}
