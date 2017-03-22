
var  validators={};

validators.alphabetsOnly=function (evt){
    var code =evt.keyCode;
    if((code>=65 && code<=90) ||
        (code>=97 && code<=122)){
    }
    else{
        evt.preventDefault();
    }
}

validators.numbersOnly = function(){

};

validators.alphaNumbericsOnly = function(){

};

validators.phoneNumber = function(){

};
validators.personalIdentificationNumber = function(){

};