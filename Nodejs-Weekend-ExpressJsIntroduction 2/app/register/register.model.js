var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//var bcrypt = require("bcrypt-nodejs");
var crypto = require('crypto');


var schemaObj = {
    username: { type: String, required: [true, "UserName is required"] },
    password: {
        type: String
    },
    firstName: { type: String },
    lastName: { type: String },
    phone: {
        type: Number,
        min: [1000000000, "Phone number must be 10 digits"],
        max: [9999999999, "Phone numebr cannot exceed 10 digits"]
    },
    age: { type: Number, min: [18, "Minimum age is 18 yrs"], max: [60, "Maximum age should not exceed 60"] },
    email: { type: String },
    reference: {
        type: String,
        enum: ["Ads", "Friends", "Website", "Others"]
    }
};
var registerSchema = new Schema(schemaObj);

registerSchema.pre('save', function(next) {
    if (this.password != '') {
        var secret = 'abcdefg';
        var hash = crypto.createHmac('sha256', secret)
            .update(this.password)
            .digest('hex');
        console.log(hash);
        this.password = hash;

    }

    next();
});
mongoose.model("profile", registerSchema);