import { IAluno } from '@/interfaces/i-aluno'

export const setAllAlunos = (alunos: IAluno[]) => ({type: 'aluno/setAllAlunos', alunos })
export const addAlunoList = (aluno: IAluno) => ({type: 'aluno/addAlunoList', aluno })
export const setAluno = (aluno: IAluno) => ({type: 'aluno/setAluno', aluno })
export const updateAluno = (aluno: IAluno) => ({type: 'aluno/updateAluno', aluno })
export const removeAluno = (aluno: IAluno) => ({type: 'aluno/removeAluno', aluno })
