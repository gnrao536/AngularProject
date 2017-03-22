function Parent(){
    this.firstName="";
    this.lastName="";
}
Parent.prototype.surname="ABCD";
var child = new Parent();
   child.toys="Barbie";

var grandChild = new Object(child);


console.log(grandChild);
console.log(child.surname);

var user = new Parent();
console.log(user.surname);