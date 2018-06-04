import { IAluno } from '@/interfaces/i-aluno'

export const setAllAlunos = (alunos: IAluno[]) => ({type: 'aluno/setAllAlunos', alunos })
