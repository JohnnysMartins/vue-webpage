import { Aluno } from '../model/aluno'

let alunos: Aluno[] = [
    {id: 1, nome: 'Adson', idade: 24},
    {id: 2, nome: 'Fulano', idade: 21},
    {id: 3, nome: 'Joao', idade: 27},
    {id: 4, nome: 'Catarina', idade: 22},
    {id: 5, nome: 'Maria', idade: 23},
]

class AlunoService {
  constructor() {
    // console.table(alunos)
  }

  public deleteAluno(aluno: Aluno) {
    alunos = alunos.filter((al) => al.id !== aluno.id)
  }
  public getAlunos() {
    return alunos
  }
  public addAluno(aluno: Aluno) {
    alunos.push(aluno)
  }
  public updateAluno(aluno: Aluno) {
    alunos.map((al) => {
      if (al.id === aluno.id) {
          al = {...aluno}
      }
    })
  }
}

export const alunoService = new AlunoService()
