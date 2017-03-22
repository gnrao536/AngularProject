
// function loopThorughVehicles(){

//     //for each vheicles
//     //buildTr()
//     //append Tr to table
//     table.append(tr);
// }

// function buildTr(){
//     //call builTd to build each coloumn
//     //append column to tr

//     yearTd = buildTd(year);
//     makeTd= buildTd(make);
//     modelTd=builTd(model);
//     tr.appendChild(yearTd);
//     tr.appendChild(makeTd);
//     tr.appendChild(modeltd);
//     return tr;
// }

// function buildTd(data){
// var td = document.createElement("td");
// td.innerHTML =data;
// return td;
// }
function buildTable() {
    var tbl = document.getElementById("tblVehicles");
    for (var i = 0; i < vehicles.length; i++) {
        //in the first iterataion.
        var row = buildTableRow(vehicles[i]);
      //  row = addAlternateColorsToRow(row,i);
        tbl.appendChild(row);
    }
}


function buildTableRow(vehicle) {
    var row = document.createElement("tr");
    var yearColumn = buildColumn(vehicle.Year);
    //Extending the requriements
    changeColorBasedOnYear(vehicle.Year,yearColumn);
   
    var makeColumn = buildColumn(vehicle.Make);
    var modelColumn = buildColumn(vehicle.Model);
    //append three columns to row
    row.appendChild(yearColumn);
    row.appendChild(makeColumn);
    row.appendChild(modelColumn);
    return row;
}

function buildColumn(data) {
    var column = document.createElement("td");
    column.innerText = data;
    return column;
}

buildTable();


function checkEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    else {
        return false;
    }
}

function addAlternateColors(row,i) {
    if (checkEven(i)) {
        row.style.backgroundColor = "grey";
    }
    else {
        row.style.backgroundColor = "yellow";
    }
    return row;
}

function changeColorBasedOnYear(data,column){
    if(data>2015){
        column.style.backgroundColor="Green";
    }
   else if(data>2013 && data<=2015){
        column.style.backgroundColor="yellow";
    }
    else {
        column.style.backgroundColor="orange";
    }

    return column;
}


function attachEvents(){
    //first get the reference of the element
    //ex. btn=document.getElementById("btnColor");
var btn=document.getElementById("btnColor");
 btn.addEventListener("click",changeColor)
    
}

//Changing the color of the table.
function changeColor() {
    //Check whether the given color is coming here or not.
    //Get the table /// <reference path="" />
    var tbl = document.getElementById("tblVehicles");
    console.log(tbl.style);
    tbl.style.backgroundColor = "green";
}
attachEvents();