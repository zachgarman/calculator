var express = require('express');

var router = express.Router();

router.post('/', function (req, res) {
  var first = req.body.firstVal;
  var second = req.body.secondVal;
  var powerOf = {};
  var power = first;

  // return 'E' if the numbers are not whole numbers or
  // if no second operator was typed
  if (parseInt(first) != first || second != second) {
    powerOf.value = 'E';
  } else if(req.body.secondVal == '') {
    powerOf.value = 'E';
  // otherwise, run the calculation
  } else {
    for (var i = second; i > 1; i--) {
      power *= first;
    }
    powerOf.value = power;
  }


  res.send(powerOf);
});

module.exports = router;
