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

module.exports.add_pagamento = (l) => {
    var n = new Pagamentos(l)
    return n.save()
}