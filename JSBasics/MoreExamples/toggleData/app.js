var content ="";

var pTag = document.getElementById("post");
//pTag.textContent = content;
content = pTag.textContent;

function compress(){
var compressedContent = content.substring(0,10);
 pTag.textContent = compressedContent;
}

function expand(){
 pTag.textContent = content;
}