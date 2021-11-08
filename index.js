const express = require('express')
const helmet = require('helmet')
const path = require('path')
const app1 = express() // Compliant
app1.use(helmet.hidePoweredBy())
const port = 3000

app1.set('view engine', 'ejs');
app1.set('views', path.join(__dirname, '/views'));

const mongoose = require('mongoose')
main().catch(err => console.log(err))
async function main() {
  // Cluster do Mongo "TournamentManager" reutilizado por questão de praticidade, tendo em vista que é um banco de dados temporário.
  await mongoose.connect('mongodb+srv://tm:tm@tournamentmanager.1mtiw.mongodb.net/eletroRank?retryWrites=true&w=majority');
}


// Modelo de Produto
const Product = require ('./models/Product')

app1.get('/', (req, res) => {
  res.render('index')
})

app1.get('/product-list', (req, res) => {
  const products = Product.find({}, function(err, docs) {
    console.log(docs);
    res.render('produtos', {products: docs})
  });
})


app1.listen(port, () => {
  console.log('EletroRank aberto e escutando em http://localhost:' + port)
})