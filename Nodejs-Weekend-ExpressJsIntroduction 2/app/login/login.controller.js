var loginCtrl = {};
var userModel = require('mongoose')
    .model("profile");
var crypto = require("crypto");

loginCtrl.get = function(req, res) {
    res.render("login");
};
loginCtrl.post = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var bcrypt = require("bcrypt-nodejs");
    var data = {};
    var query = userModel.findOne({ "username": username });
    query.select({ password: 1 });
    query.exec(function(err, data) {
        if (err) {
            res.send("Error Occured");
        } else {
            var secret = 'abcdefg';
            var hash = crypto.createHmac('sha256', secret)
                .update(password)
                .digest('hex');
            console.log(hash);
            password = hash;


            if (data.password == password) {
                res.send("Login Successful");
            } else {
                res.send("Invalid user");
            }
        }

    });
};


function checkUser(username, password) {

}

module.exports = loginCtrl;