//Deifning the schema.
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var carObj = {
    Make: { type: String },
    Model: {
        type: String
    },

    Year: { type: Number }
}


var CarsSchema = new Schema(carObj);

CarsSchema.index({ Make: "text", Model: "text", Year: "text" });
//Registering the schema with the mongooose.
mongoose.model("Car", CarsSchema);