const express = require('express')
const app1 = express()
const port = 3000

const mongoose = require('mongoose')
main().catch(err => console.log(err))
async function main() {
  // Cluster do Mongo "TournamentManager" reutilizado por questão de praticidade, tendo em vista que é um banco de dados temporário.
  await mongoose.connect('mongodb+srv://tm:tm@tournamentmanager.1mtiw.mongodb.net/eletroRank?retryWrites=true&w=majority');
}

// Teste do Banco
const kittySchema = new mongoose.Schema({
  name: String
});
const Kitten = mongoose.model('Kitten', kittySchema);
const silence = new Kitten({ name: 'Silence' });
console.log(silence.name); // 'Silence'

app.get('/', (req, res) => {
  res.send('Hello World')
})


app.listen(port, () => {
  console.log('EletroRank aberto e escutando em http://localhost:' + port)
})