export interface IAluno {
    id: number
    nome: string
    idade: number
}

export interface IAlunoState {
    alunos: IAluno[]
}
