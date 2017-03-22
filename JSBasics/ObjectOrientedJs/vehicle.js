/*
  Ways to create the object.
  1. Object literal
      Syntax: var vehicle = {engine:"",tyres:"",fuel:""}
      if you don't want to to extend.
      Object literals are very fast.
      easy to add new properites to the vehicles.
 */

//Object literal creation.
var vehicle = {};

//adding properties to object.
vehicle.engine = "1000cc";
vehicle.fuelType = "Diesel";
vehicle.noOfDoors = 4;
vehicle.seating = [{ class: "Economy", type: "Push Back" },
{ class: "Business", type: "Berth" }];
vehicle.price= function(typeOfClass){
  //login to calculate price
};
/* fail case as vehicle is not a constructor
var car = new vehicle();
console.log(car);
*/
var car = new Object(vehicle);
console.log(car);
