var express = require('express');

var router = express.Router();

router.post('/', function (req, res) {
  var quotient = {
    'value': parseFloat(req.body.firstVal) / parseFloat(req.body.secondVal)
  };
  // return 'E' if no second operator was typed
  if(req.body.secondVal == '') {
    quotient.value = 'E';
  }

  res.send(quotient);
});

module.exports = router;
