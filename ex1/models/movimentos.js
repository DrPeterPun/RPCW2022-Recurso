const mongoose = require('mongoose')

const CidadeSchema = new mongoose.Schema({
    _id: String,
    Numero: String,
    Tipo: String,
    Data: String,
    Valor: Number,
    entidade: String,
    Descricao: String,
})

module.exports = mongoose.model("cidade", CidadeSchema)