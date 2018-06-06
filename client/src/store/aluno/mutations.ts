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
  [type.UPDATE_ALUNO](state: IAlunoState, aluno: IAluno) {
    console.log(aluno.id)
    const index = state.lista.findIndex((al) => aluno.id === al.id)
    state.lista.splice(index, 1, aluno)
  },
  [type.REMOVE_ALUNO](state: IAlunoState, aluno: IAluno) {
    console.log(aluno.id)
    state.lista = state.lista.filter((h) => h !== aluno)
    
  },
}
