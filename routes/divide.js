var express = require('express');

var router = express.Router();

router.post('/', function (req, res) {
  var quotient = {
    'value': parseFloat(req.body.firstVal) / parseFloat(req.body.secondVal)
  };
  res.send(quotient);
});

module.exports = router;
