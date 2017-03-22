var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Gender;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
    Gender[Gender["DoNotDisclose"] = 2] = "DoNotDisclose";
})(Gender || (Gender = {}));
var IdentityType;
(function (IdentityType) {
    IdentityType[IdentityType["Adhaar"] = 0] = "Adhaar";
    IdentityType[IdentityType["PAN"] = 1] = "PAN";
    IdentityType[IdentityType["Passport"] = 2] = "Passport";
    IdentityType[IdentityType["DrivingLicense"] = 3] = "DrivingLicense";
})(IdentityType || (IdentityType = {}));
var Identity = (function () {
    function Identity() {
    }
    return Identity;
}());
var Person = (function () {
    function Person() {
    }
    return Person;
}());
var Manager = (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        _super.apply(this, arguments);
    }
    return Manager;
}(Person));
var nishanth = new Manager();
nishanth.FirstName = "Nishanth";
nishanth.LastName = "M";
nishanth.Age = 18;
nishanth.Gender = Gender.Male;
nishanth.IdentityProof = new Identity();
nishanth.IdentityProof.IDType = IdentityType.PAN;
nishanth.IdentityProof.Value = "AND1989899";
nishanth.Reportees = ["Kiran", "Kalyan"];
