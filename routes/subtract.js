var express = require('express');

var router = express.Router();

router.post('/', function (req, res) {
  var difference = {
    'value': parseFloat(req.body.firstVal) - parseFloat(req.body.secondVal)
  };
  res.send(difference);
});

module.exports = router;
