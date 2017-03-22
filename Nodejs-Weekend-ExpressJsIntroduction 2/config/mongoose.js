// Import the connection string
// import the mongoose

var connection = require('./development');
var mongoose = require('mongoose');



module.exports = function() {
    console.log(connection.connectionString);
    var db = mongoose.connect(connection.connectionString);
    console.log("Database connected");
    require('../app/cars/cars.model');
    require('../app/register/register.model');
    return db;

};