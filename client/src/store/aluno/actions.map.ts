import { IAluno } from '@/interfaces/i-aluno'

export const setAllAlunos = (alunos: IAluno[]) => ({type: 'aluno/setAllAlunos', alunos })
export const addAluno = (aluno: IAluno) => ({type: 'aluno/addAluno', aluno })
