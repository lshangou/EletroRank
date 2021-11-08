const express = require('express')
const helmet = require('helmet')
const path = require('path')
const bodyParser = require('body-parser')
const multer = require('multer') // v1.0.5
const app1 = express() // Compliant
app1.use(helmet.hidePoweredBy())
const port = 3000


const diskUpload = multer({
  storage: diskStorage,
  limits: {
      fileSize: 8000000 // Compliant: 8MB
  }
}) // for parsing multipart/form-data

app1.use(bodyParser.json()) // for parsing application/json
app1.use(bodyParser.urlencoded({ extended: true, limit: "2mb"})) // for parsing application/x-www-form-urlencoded

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

app1.get('/product-form', (req, res) => {
  res.render('cadastro-produtos')
})

app1.get('/product-list', (req, res) => {
  const products = Product.find({}, function(err, docs) {
    console.log(docs);
    res.render('produtos', {products: docs})
  });
})

app1.post('/cadastrar-produto', function (req, res, next) {
  console.log(req.body)
  const newProduct = new Product({nome: req.body.nome, preco: req.body.preco, tipo: req.body.tipo, descricao: req.body.descricao})
  newProduct.save()
  res.json(req.body)
})


app1.listen(port, () => {
  console.log('EletroRank aberto e escutando em http://localhost:' + port)
})