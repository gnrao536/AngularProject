function getControls(){
    var controls ={};
  controls.btnUser = document.getElementById("btnUser");
  controls.firstName = document.getElementById("txtFirstName");
  return controls;
}

function bindEvents(){
    //get the reference of the eleemnt

  /*
    addEventListner
    method offered by the browser 
    params:
        1.eventName
        2.callbackFunction
        btnUser.addEventListener("click",userRegisteration);
  */
  var ctrls = getControls();
  ctrls.btnUser.addEventListener("click",userRegisteration);
  ctrls.firstName.addEventListener("keypress",validators.alphabetsOnly);
}

function userRegisteration(evt){
  console.log(this);
}

// function alphabetsOnly(evt){
//     console.log(this);
//     console.log(evt);
//     var code =evt.keyCode;
//     // var capitalLettersMinimum=65;
//     // var capitalLettersMaximum=90;
//     // var smallLetterMinium =97;
//     // var smallLetterMaxmium=122;
//     var dataLength = this.value.length;
//     console.log(dataLength);
//     if((code>=65 && code<=90) ||
//         (code>=97 && code<=122)){
//     }
//     else{
//         //restrict the user to enter
//         evt.preventDefault();
//     }
// }

bindEvents();
