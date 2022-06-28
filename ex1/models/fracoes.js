const mongoose = require('mongoose')

const CidadeSchema = new mongoose.Schema({
    _id: String,
    Permilagem: Number,
    Mensalidade: Number,
})

module.exports = mongoose.model("cidade", CidadeSchema)