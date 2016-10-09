var express = require('express');

var router = express.Router();

router.post('/', function (req, res) {
  var number = parseInt(req.body.firstVal);
  number *= number;

  var square = {
    'value': number
  }

  // return 'E' if a second operator was typed
  if(req.body.secondVal != '') {
    square.value = 'E';
  }

  res.send(square);

});

module.exports = router;
