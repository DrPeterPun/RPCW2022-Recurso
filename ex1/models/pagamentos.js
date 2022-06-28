const mongoose = require('mongoose')

const CidadeSchema = new mongoose.Schema({
    _id: String,
    Fracao: Number,
    Jan: Number,
    Fev: Number,
    Mar: Number,
    Abr: Number,
    Mai: Number,
    Jun: Number,
    Jul: Number,
    Agr: Number,
    Set: Number,
    Out: Number,
    Nov: Number,
    Dez: Number,
})

module.exports = mongoose.model("cidade", CidadeSchema)