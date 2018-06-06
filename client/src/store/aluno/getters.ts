import { IAlunoState } from '@/interfaces/i-aluno'

export default {
  alunos: (state: IAlunoState) => state.lista,
  aluno: (state: IAlunoState, id: number) => state.aluno,
}
