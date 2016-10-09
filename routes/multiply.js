var express = require('express');

var router = express.Router();

router.post('/', function (req, res) {
  var product = {
    'value': parseFloat(req.body.firstVal) * parseFloat(req.body.secondVal)
  };
  // return 'E' if no second operator was typed
  if(req.body.secondVal == '') {
    product.value = 'E';
  }

  res.send(product);
});

module.exports = router;
