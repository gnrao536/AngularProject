// conditional statements.
var user={
    name:"NBITS",
    password:"kiran"
};
function checkUser(username,password){
  if(username==user.name && password==user.password){
      console.log("Valid user");
  }
  else{
      console.log("Invalid user");
  }
}

checkUser("kiran","PVS");
checkUser("NBITS","kiran");