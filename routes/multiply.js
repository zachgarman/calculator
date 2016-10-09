var express = require('express');

var router = express.Router();

router.post('/', function (req, res) {
  var product = {
    'value': parseFloat(req.body.firstVal) * parseFloat(req.body.secondVal)
  };
  res.send(product);
});

module.exports = router;
