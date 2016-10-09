var express = require('express');

var router = express.Router();

router.post('/', function (req, res) {
  var number = parseInt(req.body.firstVal);
  if (number < 0 || number != parseFloat(req.body.firstVal)) {
    number = 'E';
  } else {
    var total = 1;
    for (var i = number; i > 0; i--) {
      total = total * i;
    }
    number = total;
  }

  var factorial = {
    'value': number
  }

  res.send(factorial);


});

module.exports = router;
