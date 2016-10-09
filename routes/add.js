var express = require('express');

var router = express.Router();

router.post('/', function (req, res) {
  var sum = {
    'value': parseFloat(req.body.firstVal) + parseFloat(req.body.secondVal)
  };
  // return 'E' if no second operator was typed
  if(req.body.secondVal == '') {
    sum.value = 'E';
  }

  res.send(sum);
});

module.exports = router;
