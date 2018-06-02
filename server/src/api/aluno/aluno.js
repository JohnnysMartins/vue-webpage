const restful = require('node-restful')
const mongoose = restful.mongoose

const alunoSchema = new mongoose.Schema({
  nome: { type: String, require: true },
  idade: { type: Number, require: true }
})

module.exports = restful.model('aluno', alunoSchema)