class Vehicle {
    Engine: String
    NoOfDoors: Number
    NoOfTyres: Number
    Color: Colors
    SeatingCapacity: Number
}
enum CarTypes {
    SUV,
    LUV,
    Sedan,
    HatchBack
}
enum Colors{
    Black,
    White,
    Grey,
    Red
}
class Car extends Vehicle {
    Type: CarTypes
    Price:Number
}

var Audi = new Car();
Audi.Color= Colors.Black;
Audi.NoOfDoors=4;
Audi.NoOfTyres=4;
Audi.Type=CarTypes.SUV;