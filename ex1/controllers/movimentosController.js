const Movimentos = require('../models/movimentos')

module.exports.list = () => {
    return Movimentos.find().exec()
}

module.exports.lookup = (id) => {
    return Movimentos.findById(id).exec()
}

module.exports.list_by_tipo = (tipo) => {
    return Movimentos.find({Tipo: tipo},{Numero:1}).exec()
}

module.exports.group_by_entidade = () => {
    return Movimentos.aggregate([{
        $group: {
            entidade: "$ent", 
            "total": {$sum: "$Valor"}}
    }]).exec()
}

module.exports.add_mov = (l) => {
    var n = new Movimentos(l)
    return n.save()
}