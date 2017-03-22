var carCtrl = require('./cars.controller');
module.exports = function(app) {
    app.get("/cars", carCtrl.get);
};