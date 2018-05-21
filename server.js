var express = require('express')
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');

var PORT = process.env.PORT || 3000;

var app = express();

//Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

//parse application/json
app.use(bodyParser.json());

//HandleBars 
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");


var routes = require("./controllers/burgers_controller.js");

app.use(routes);


 
app.listen(PORT, ()=> {
    console.log('http://localhost:' + PORT);
});

