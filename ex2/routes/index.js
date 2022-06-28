var express = require('express');
var router = express.Router();
let  api= ""
/* GET home page. */
router.get('/', function(req, res, next) {
  let pago =0
  let recebido = 0
  requests = []

  requests.push(axios.get(api+"/movimentos?groupBy=Despesa"))
  requests.push(axios.get(api+"/movimentos?groupBy=Receita"))

      axios.all(requests).then( axios.spread((...responses) => {
        despesas = responses[0].data
        receitas = responses[1].data
        for (var i in despesas){
          pago += parseInt(despesas[i].Valor, 10);
        }
        for (var i in receitas){
          recebido += parseInt(despesas[i].Valor, 10);
        }
        res.render('index', { pago:pago, recebido:recebido})
      })).catch( error => {
        res.status(500).send("<p>Erro na obtenção do token!</p>")
      })
});


router.get('/movimentos', function(req, res, next) {
  axios.get(api+"/movimentos").then(
    response => {
      res.render("movimentos",{movimentos:response.data})
    }
  )

})

router.get('/pagamentos', function(req, res, next) {
  axios.get(api+"/pagamentos").then(
    response => {
      res.render("pagamentos",{movimentos:response.data})
    }
  )
})

router.post('/movimentos', function(req, res, next) {
  axios.post(api+"/movimentos",req.body).then(
    response => {
      res.redirect('/movimentos')
    }
  )

})

router.post('/pagamentos', function(req, res, next) {
  axios.post(api+"/pagamentos",req.body).then(
    response => {
      res.redirect('/pagamentos')
    }
  )
})


module.exports = router;
