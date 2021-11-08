const express = require('express')
const helmet = require("helmet")
const app1 = express() // Compliant
app1.use(helmet.hidePoweredBy())
const port = 3000

const mongoose = require('mongoose')
main().catch(err => console.log(err))
async function main() {
  // Cluster do Mongo "TournamentManager" reutilizado por questão de praticidade, tendo em vista que é um banco de dados temporário.
  await mongoose.connect('mongodb+srv://tm:tm@tournamentmanager.1mtiw.mongodb.net/eletroRank?retryWrites=true&w=majority');
}

// Modelo de Produto
const Product = require ('./models/Product')

const iphone = new Product({nome: 'IPhone', preco: '4000', tipo: 'celular', descricao: 'Iphone é um celular da apple.'})
iphone.save()
console.log(iphone.nome)

Product.find({}, function(err, docs) {
  console.log(docs)
})

app1.get('/', (req, res) => {
  res.send('Hello World')
})


app1.listen(port, () => {
  console.log('EletroRank aberto e escutando em http://localhost:' + port)
})