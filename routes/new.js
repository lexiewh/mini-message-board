var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('form')
});

// TODO: create post request
//router.post('/')

module.exports = router;
