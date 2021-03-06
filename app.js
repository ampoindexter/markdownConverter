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

app.post('/convert', function(req, res) {
  var inputText = req.body.markdown.toString();
  var outputText = marked(inputText);
  res.send(outputText);
});

app.listen(PORT, function(){
  console.log('Listening on port ', PORT);
});