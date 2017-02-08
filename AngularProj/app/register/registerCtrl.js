(function(){
    
     // creating named function and passed to registerCtrl controller as callback
    function registerCtrl(lookupSvc){
        var vm=this;
        
       // vm.user={ };
        
        // for  checkuser custom directive
        vm.user = { userName:"kiran"};
        
        vm.register=function(){
            console.log(vm.user);
        };
        
        
        vm.DobRange ={maxdate:"-18Y"};
        
        vm.DateofReservationRange={mindate:"0D",maxdate:"+1M"};
        //    vm.countries=lookupSvc.getCountries();
        
        // getting countries from array using promise $q
        
  /*      lookupSvc.getCountries()
        .then( function(res){
            console.log(res);
            vm.countries=res;
        })
        .catch(function(err){
            console.log(err);
        })
             */
        
        vm.selectedCountry=lookupSvc.defaultCountry();
        
        
          // getting countries from JSON file using promise $q $http
        lookupSvc.getCountriesFromJson()
        .then(function(res){
            console.log(res);
            vm.countries=res;
        })
        .catch(function(err){
            console.log(err);
        });
        
    }
    
        // retriving register module
    angular.module("register")
    
        // creating registerCtrl controller
    .controller("registerCtrl",["lookupService",registerCtrl]);
    
})();