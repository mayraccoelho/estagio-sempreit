const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

mongoose.connect('mongodb+srv://admin:admin1304@cluster0-heovg.mongodb.net/filmes', { useNewUrlParser: true })

let db = mongoose.connection
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
    console.log("conexão feita com sucesso")
  })



const filmes = require('../src/routes/filmesRoute')

app.use(function (req, res, next) {
    res.header('Acess-Control-Allow-Origin', '*')
    res.header(
        'Acess-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
})

app.use(express.static('public'))

app.use(bodyParser.json())

app.use('/filmes', filmes)

module.exports = app