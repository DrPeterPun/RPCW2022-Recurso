const Pagamentos = require('../models/pagamentos')
const Faturacao = require('../models/Faturacao')


module.exports.list = () => {
    return Pagamentos.find({},{}).exec()
}

module.exports.find_id = (id) => {
    return Pagamentos.findById(id).exec()
}

module.exports.find_debt_month = (month) => {
    return Pagamentos.find({month: month}).exec()
}

module.exports.add_pagamento = (mes,fracao) => {
    let r = Log.findOneAndUpdate({fracao: l.fracao}, {mes: 1}, {new: true, strict:false}) 
    return r
}