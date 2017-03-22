function vehicle(){
  //property of vehicle
  // public
    this.engine="";
    var price="";
    this.description=function(){
        console.log("This is an awesome vehicle type");
    };
}

var car = new vehicle();
car.description = function(){
    console.log("this is a bad car");
}

car.description();
var bike = new vehicle();
bike.description();

// var bike = new vehicle();
// car.noOfDoors=4;

// var Audi = new Object(car);
// Audi.type="Luxury";
// var A5 = new Object(Audi);
// console.log(A5);
