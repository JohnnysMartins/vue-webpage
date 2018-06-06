import { IAluno } from '@/interfaces/i-aluno'

export const setAllAlunos = (alunos: IAluno[]) => ({type: 'aluno/setAllAlunos', alunos })
export const addAlunoLista = (aluno: IAluno) => ({type: 'aluno/addAluno', aluno })
export const setAluno = (aluno: IAluno) => ({type: 'aluno/setAluno', aluno })
