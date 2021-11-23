const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
})

const Person = mongoose.model('Person', personSchema)

module.exports = Person