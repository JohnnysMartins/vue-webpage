const express = require('express')
const alunoService = require('../api/aluno/aluno-service')

module.exports = (server) => {
  const router = express.Router()
  server.use('/api', router)

  alunoService.register(router, '/alunos')
}

