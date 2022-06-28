var express = require('express');
var router = express.Router();

//alterar controlers
var PagamentosController = require('../controllers/pagamentosController')
var FracoesController = require('../controllers/fracoesController')
var MovimentosController = require('../controllers/movimentosController')

router.get('/movimentos', function(req, res, next) {
  if(req.query.groupBy=="Despesa" ||req.query.groupBy=="Receita") {
    MovimentosController.list_by_tipo(req.query.groupBy).then( value => {
      res.jsonp(value)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  }
  else if(req.query.groupBy) {
    MovimentosController.list_by_entidade(req.query.groupBy).then( value => {
      res.jsonp(value)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  }

  else {
    MovimentosController.list().then( value => {
      res.jsonp(value)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  }
});

router.get('/pagamentos', function(req, res, next) {
  if (req.query.status) {
     PagamentosController.find_debt_month(req.query.status).then( value => {
      res.jsonp(value)
    }).catch( error => {
      res.status(500).jsonp({error: error})
    })
  }
  PagamentosController.list().then( value => {
    res.jsonp(value)
  }).catch( error => {
    res.status(500).jsonp({error: error})
  })
});

router.get('/pagamentos/:id', function(req, res, next) {
  PagamentosController.find_by_id(req.params.id).then( value => {
    res.jsonp(value)
  }).catch( error => {
    res.status(500).jsonp({error: error})
  })
});

router.post('/api/movimentos', function(req, res){
  MovimentosController.add_mov(req.body).then( value => {
    res.jsonp(value)
  }).catch( error => {
    res.status(500).jsonp({error: error})
  })
})
 
router.post('/api/pagamentos', function(req, res){
  PagamentosController.add_pagamento(req.body).then( value => {
    res.jsonp(value)
  }).catch( error => {
    res.status(500).jsonp({error: error})
  })
}) 

module.exports = router;
