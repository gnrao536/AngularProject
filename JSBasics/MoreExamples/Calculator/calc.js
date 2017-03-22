function checkData(firstNumber, secondNumber) {
    if (typeof firstNumber == "number" && typeof secondNumber == "number") {
        compare(firstNumber,secondNumber);
    }
    else {
        console.log("I cannot compare");
    }
}
function compare(firstNumber, secondNumber) {
    if (firstNumber == secondNumber) {
        console.log("Both are equal")
    }
    else if (firstNumber > secondNumber) {
        console.log("First Number is big")
    }
    else {
        console.log("Second Number is big");
    }
}


checkData(11, 11);
checkData("kiran", "pvs");