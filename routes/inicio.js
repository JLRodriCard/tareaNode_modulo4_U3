var express = require('express');
var router = express.Router();


/* GET pagina inicio */
//router.get('/', function (req, res, next) {
    //res.send('Soy la Pagina de Inicio');
//});

router.get('/', function (req, res, next) {
    res.render('index');
});


module.exports = router;