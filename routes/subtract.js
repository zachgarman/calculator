var express = require('express');

var router = express.Router();

router.post('/', function (req, res) {
  var difference = {
    'value': parseFloat(req.body.firstVal) - parseFloat(req.body.secondVal)
  };
  // return 'E' if no second operator was typed
  if(req.body.secondVal == '') {
    difference.value = 'E';
  }

  res.send(difference);
});

module.exports = router;
