var carsModel = require('mongoose').model('Car');
var carCtrl = {};
carCtrl.get = function(req, res) {
    var query = carsModel.find({});
    query.exec(function(err, data) {
        if (err) {
            res.send("Error Occured");
        } else {
            res.render("cars", {
                cars: data
            });
        }
    });

};


carCtrl.insert = function(req, res) {
    console.log(req.body);
    var car = new carsModel(req.body)
    car.save(function(err, data) {
        if (err) {
            res.send("Error Occured");
        } else {
            res.redirect("/cars");
        }
    });

};

carCtrl.create = function(req, res) {
    res.render("createCar");
}

carCtrl.search = function(req, res) {
    // var searchQuery = {
    //     Make: req.body.search
    // };
    var searchQuery = {
        $text: {
            $search: req.body.search
        }
    };
    var query = carsModel.find(searchQuery);
    query.exec(function(err, data) {
        if (err) {
            console.log(err);
            res.send("Error Occured");
        } else {
            res.render("cars", {
                cars: data
            });
        }
    });
};

module.exports = carCtrl;