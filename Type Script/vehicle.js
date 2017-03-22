var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Vehicle = (function () {
    function Vehicle() {
    }
    return Vehicle;
}());
var CarTypes;
(function (CarTypes) {
    CarTypes[CarTypes["SUV"] = 0] = "SUV";
    CarTypes[CarTypes["LUV"] = 1] = "LUV";
    CarTypes[CarTypes["Sedan"] = 2] = "Sedan";
    CarTypes[CarTypes["HatchBack"] = 3] = "HatchBack";
})(CarTypes || (CarTypes = {}));
var Colors;
(function (Colors) {
    Colors[Colors["Black"] = 0] = "Black";
    Colors[Colors["White"] = 1] = "White";
    Colors[Colors["Grey"] = 2] = "Grey";
    Colors[Colors["Red"] = 3] = "Red";
})(Colors || (Colors = {}));
var Car = (function (_super) {
    __extends(Car, _super);
    function Car() {
        _super.apply(this, arguments);
    }
    return Car;
}(Vehicle));
var Audi = new Car();
Audi.Color = Colors.Black;
Audi.NoOfDoors = 4;
Audi.NoOfTyres = 4;
Audi.Type = CarTypes.SUV;
