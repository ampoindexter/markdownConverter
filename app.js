var bodyParser = require('body-parser');
var express = require('express');
var marked = require('marked');
var morgan = require('morgan');

var app = express();
app.use(express.static('public'));
app.use(morgan('dev'));
app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('index');
});

app.get('/test', function(req, res) {
  console.log(marked('I am using __markdown__.'));
});

// var markdownString;
// marked(markdownString, function (err, outputText) {
//   if (err) {
//     throw err;
//   } else {
//     console.log(outputText);
//   }
// });

app.post('/', function(req, res) {
  var outputText = req.body;
  console.log(marked(outputText));
});

app.listen(3000);
console.log('Listening on port 3000');