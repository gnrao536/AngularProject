
enum Gender{
    Male,
    Female,
    DoNotDisclose
}
enum IdentityType{
    Adhaar,
    PAN,
    Passport,
    DrivingLicense
}
interface Identity{
    IDType:IdentityType
    Value:String
}
class Person{
     constructor(){
       this.Country="IN";
    }
    FirstName:String
    LastName:String
    Gender:Gender
    Age:Number
    IdentityProof:Identity
    Country:String
}

class Manager extends Person{
    constructor(fname:string,lname:string,age:Number){
        super();
        this.FirstName=fname;
        this.LastName=lname;
        this.Age=age;
       
    }
    Reportees:Array<String>
}

var nishanth = new Manager("Nishanth","M",18);

nishanth.Gender=Gender.Male;
nishanth.IdentityProof={IDType:IdentityType.Adhaar,Value:"1234567890"}
nishanth.IdentityProof.IDType=IdentityType.PAN;
nishanth.IdentityProof.Value="AND1989899";
nishanth.Reportees= ["Kiran","Paturi"];


// function identity<T>(name: T): T {
//     return name;
// }

function add<T>(first:T,second:T){
  
}


add<String>("Kiran","Paturi");
add<Number>(1,2,);
