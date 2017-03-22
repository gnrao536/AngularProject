var carCtrl = require('./cars.controller');
module.exports = function(app) {
    app.get("/cars", carCtrl.get);
    app.post("/cars", carCtrl.insert);
    app.get("/createCar", carCtrl.create);
    app.post("/cars/search", carCtrl.search)
};