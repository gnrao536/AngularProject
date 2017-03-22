var loginCtrl = {};
loginCtrl.get = function(req, res) {
    res.render("login");
};
loginCtrl.post = function(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    var data = {};
    if (checkUser(username, password)) {
        data.username = username;
        res.render("profile", {
            profile: data
        });
    } else {
        res.render("login");
    }
};


function checkUser(username, password) {
    if (username == "kiran" && password == "NBITS") {
        return true;
    } else {
        return false;
    }
}

module.exports = loginCtrl;