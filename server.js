var express = require('express')
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, ()=> {
    console.log('Listening on 3000')
});

