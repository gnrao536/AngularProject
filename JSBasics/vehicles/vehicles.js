//getYears();

function buildYearDropDown() {
    //get the refernce of the dropdown
    var yearDropdown = document.getElementById("ddlYear");
   
    // we are calculating the minimum years from now.
    var miniumYear = new Date().getFullYear() - 30;
    
    // we are calcuting the current year.
    var maximumYear = new Date().getFullYear();
   
   // loop from minmum year to current year
    for (var i = miniumYear; i <= maximumYear; i++) {
        // i=1986
        //in the first iterataion 86 <2016
        //we will enter in side the loop.
        
        //creating element dynamically --my elemnt type is option.
        var optionTag = document.createElement("option");
        //Option tag will be <option value="">textprorty</option>
        //attach the value property to the option tag. 
        optionTag.value = i;

        //attach the text property to the option tag.
        optionTag.textContent = i;

        //We want option tag to be the child of select.
        yearDropdown.appendChild(optionTag);
    }
}

function loadMakes(){
    console.log("Makes...");
    //get the refernce of the dropdown
     var yearDropdown = document.getElementById("ddlYear");
     //get the selected value of the dropdown
    var selectedYear = yearDropdown.value;
    
    //call the getMakes method.
    getMakes(selectedYear)
}


function getMakes(selectedYear){
    //Create an empty array to store the matched vechile of that year.
    var selectedVehicles =[];
  
  //vehicles is declared in the data.js file.
  //loop through each vehicle 
  //check if the vehicle year matches with the selected year.
  //if it is matching store this vehicle in the selected Vehicle array.
    for(var i=0;i<vehicles.length;i++){
        if(vehicles[i].Year == selectedYear){
            selectedVehicles.push(vehicles[i]);
        }
       //console.log(vehicles[i].Year);
       
    }
    console.log(selectedVehicles);

    //call the buildYearDropDown with the list of selected vehicles.
    buildMakesDropdown(selectedVehicles);
}
//
function buildMakesDropdown(vehicles){
     //get the refernce of the dropdown
    var makesDropdown = document.getElementById("ddlMake");

    //clear the previous data
    //innerHTML isa property of dom
    //Please google for the property behaviour.
    makesDropdown.innerHTML="";
    addPleaseSelect(makesDropdown);
   // loop from  year to current year
   //input.length willl the number of selected vehicles
    for (var i =0; i <= vehicles.length; i++) {
        
        
        //creating element dynamically --my elemnt type is option.
        var optionTag = document.createElement("option");
        //Option tag will be <option value="">textprorty</option>
        //attach the value property to the option tag. 
        //get the make property for each vehicles.
        //vehicle[i].Make
        //vehicle[i] indicates current vehicles index.
        optionTag.value = vehicles[i].Make;

        //attach the text property to the option tag.
        optionTag.textContent =vehicles[i].Make;

        //We want option tag to be the child of select.
        makesDropdown.appendChild(optionTag);
    }

}

function addPleaseSelect(dropdownName){
      var optionTag = document.createElement("option");
        //Option tag will be <option value="">textprorty</option>
        //attach the value property to the option tag. 
        optionTag.value = "";

        //attach the text property to the option tag.
        optionTag.textContent ="Please Select";

        //We want option tag to be the child of select.
        dropdownName.appendChild(optionTag);
}
buildYearDropDown();