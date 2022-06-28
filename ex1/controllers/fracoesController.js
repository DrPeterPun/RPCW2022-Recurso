const Fracoes = require('../models/fracoes')

module.exports.list = () => {
    return Fracoes.find({},{}).exec()
}

module.exports.lookup = (id) => {
    return Fracoes.findById(id).exec()
}