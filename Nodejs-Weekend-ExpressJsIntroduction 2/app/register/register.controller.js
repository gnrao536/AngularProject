var registerCtrl = {};
var userModel = require('mongoose')
    .model("profile");
registerCtrl.get = function(req, res) {
    res.render("register");
    // res.send("<h1>Hello guys Welcome to Register</h1>");
};



registerCtrl.post = function(req, res) {
    console.log(req.body);
    var user = new userModel(req.body)
    user.save(function(err, data) {
        if (err) {
            console.log(err);
            res.send("Error Occured");
        } else {
            res.redirect("/cars");
        }
    });
};

module.exports = registerCtrl;