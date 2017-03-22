var productCtrl = {};
var request = require("request");
productCtrl.get = function(req, res) {
    // var options = {
    //     url: "http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query=jeans"

    // };

    // request.get(options, function(err, response) {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         var result = JSON.parse(response.body);
    //         console.log(result.items[0]);
    //         res.render("products", { products: result.items });
    //     }
    // })
    res.render("products", { products: null });


};

productCtrl.search = function(req, res) {

    var query = req.body.search;
    var options = {
        url: "http://api.walmartlabs.com/v1/search?apiKey=yjrruzc9fgbxvs28qw2rjczv&format=json&query=" + query

    };
    console.log(options);
    request.get(options, function(err, response) {
        if (err) {
            console.log(err);
        } else {
            var result = JSON.parse(response.body);
            res.send(result);
            // res.render("products", { products: result.items });
        }
    })



};
module.exports = productCtrl;