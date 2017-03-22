var express = require("express");
var bodyParser = require("body-parser");

module.exports = function() {

    var app = express();
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.set('view engine', 'ejs');

    var registerRoute = require("../app/register/register.route")(app);
    var loginRoute = require("../app/login/login.route")(app);
    var carRoute = require("../app/cars/cars.route")(app);
    var productRoute = require('../app/products/product.route')(app);

    function defaultRoute(req, res) {
        res.send("<h1>Hello guys Welcome to ExpressJs</h1>");
    }
    return app;
}