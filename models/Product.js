const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  nome: String,
  preco: String,
  tipo: String,
  descricao: String
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product