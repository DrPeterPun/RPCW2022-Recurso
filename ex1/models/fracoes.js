const mongoose = require('mongoose')

const FracoesSchema = new mongoose.Schema({
    _id: String,
    Permilagem: Number,
    Mensalidade: Number,
})

module.exports = mongoose.model("fracoes", FracoesSchema)