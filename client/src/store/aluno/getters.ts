import { IAlunoState } from '@/interfaces/i-aluno'

export default {
  alunos: (state: IAlunoState) => state.lista,
}
