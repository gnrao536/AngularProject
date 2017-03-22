var vehicles = [
    { "Make": "Maruti Suziki", "Model": "WagonR", "Year": "2012" },
     { "Make": "Maruti Suziki", "Model": "Ertiga", "Year": "2016" },
    { "Make": "Audi", "Model": "A5", "Year": "2016" },
    { "Make": "BMW", "Model": "C2000", "Year": "2015" },
    { "Make": "Hyundai", "Model": "Creta", "Year": "2013" },
    { "Make": "Honda", "Model": "Accord", "Year": "2014" }
];

var getYears = function(){
    var miniumYear = new Date().getFullYear()-30;
    var maximumYear = new Date().getFullYear();
    var yearsArray =[];
    for(var i=miniumYear;i<=maximumYear;i++){
      console.log(i);   
    }
};

