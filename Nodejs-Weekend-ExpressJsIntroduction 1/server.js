var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var config = require("./config/development");

//import the register route
// pass the app as parameter to function.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set('view engine', 'ejs');

var registerRoute = require("./app/register/register.route")(app);
var loginRoute = require("./app/login/login.route")(app);
var carRoute = require("./app/cars/cars.route")(app);


function defaultRoute(req, res) {
    res.send("<h1>Hello guys Welcome to ExpressJs</h1>");
}


app.get("/", defaultRoute);

app.listen(config.port);