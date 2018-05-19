const express = require('express')
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

const app = express();

//Serve static content for the app from the public directory in the application directory
app.get(express.static("public"));

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

