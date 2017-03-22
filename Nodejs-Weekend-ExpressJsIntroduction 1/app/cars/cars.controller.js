var carsModel = require("./carsModel");

var carCtrl = {};
carCtrl.get = function(req, res) {
    res.render("cars", {
        cars: carsModel()
    });
};

module.exports = carCtrl;