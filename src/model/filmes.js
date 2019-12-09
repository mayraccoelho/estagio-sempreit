const mongoose = require('mongoose')

const filmesSchema = new mongoose.Schema({
    titulo: { type: String },
    ano: { type: Number}
}, { versionKey: false })

const filmes = mongoose.model('Filmes', filmesSchema)

module.exports = filmes