var ctrl = require('./register.controller');
module.exports = function(app) {
    app.get("/register", ctrl.get);
    app.post("/api/register", ctrl.post);
};