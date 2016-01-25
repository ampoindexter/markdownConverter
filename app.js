'use strict';

var bodyParser = require('body-parser');
var express = require('express');
var marked = require('marked');
var morgan = require('morgan');
const PORT = process.env.PORT || 3000;

var app = express();
app.use(express.static('public'));
app.use(morgan('dev'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('index');
});

// app.get('/test', function(req, res) {
//   console.log(marked('I am using __markdown__.'));
// });

app.post('/convert', function(req, res) {
  var inputText = req.body.markdown.toString();
  var outputText = marked(inputText);
  console.log(outputText);
  res.send(outputText);
});

app.listen(PORT, function(){
  console.log('Listening on port ', PORT);
});