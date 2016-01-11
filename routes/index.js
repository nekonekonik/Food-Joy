var express = require('express');
var router = express.Router();

var logger = new Console(output, errorOutput);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
