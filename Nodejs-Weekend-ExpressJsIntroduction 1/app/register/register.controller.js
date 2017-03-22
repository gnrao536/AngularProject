var registerCtrl = {};

registerCtrl.get = function(req, res) {
    res.render("register");
    // res.send("<h1>Hello guys Welcome to Register</h1>");
};



registerCtrl.post = function(req, res) {
    console.log(req.body);
    res.send("Thank you for your post");
};

module.exports = registerCtrl;