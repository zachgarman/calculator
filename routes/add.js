var express = require('express');

var router = express.Router();

router.post('/', function (req, res) {
  var sum = {
    'value': parseFloat(req.body.firstVal) + parseFloat(req.body.secondVal)
  };
  res.send(sum);
});

module.exports = router;
