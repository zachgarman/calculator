var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var additionRouter = require('./routes/add');
var divisionRouter = require('./routes/divide');
var multiplicationRouter = require('./routes/multiply');
var subtractionRouter = require('./routes/subtract');
var factorialRouter = require('./routes/factorial');

var app = express();

// Middleware
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));

// routers running
app.use('/add', additionRouter);
app.use('/divide', divisionRouter);
app.use('/multiply', multiplicationRouter);
app.use('/subtract', subtractionRouter);
app.use('/factorial', factorialRouter);

app.get('/', function (req, res) {
  var fileName = path.join(__dirname, 'public/views/index.html');
  res.sendFile(fileName);
});

// serve home page on localhost:3000
app.listen(3000);
