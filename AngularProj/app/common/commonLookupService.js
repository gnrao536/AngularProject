(function(){
    
        // creating named function and passed to lookupService service as callback
    function lookupServiceFn($q,$http){
        
        var countries= [{code:"IN",name:"India"},{code:"USA",name:"United States"}];
     
        // getting countries from above array using promise $q
   /*     this.getCountries=function(){
                
            // create defered object
            var dfd=$q.defer();
            if(countries.length>0){
                dfd.resolve(countries);
            }
            else{
                dfd.reject("There is error");
            }
            return dfd.promise;
        };
                         */   
         
        this.defaultCountry=function(){
            var country="";
            angular.forEach(countries,function(item){
               if(item.code=="IN"){
                   country=item;
               } 
                
            });
                return country;
        };
        
        // getting countries from JSON file using promise $q $http
        this.getCountriesFromJson=function(){
            
            // creating deferred object
            var dfd=$q.defer();
            
            // making http call
             $http.get("api/countries.json")
             .then(function(response){
                 console.log(response);
                 dfd.resolve(response.data.countries);
             })
             .catch(function(error){
                 console.log(error);
                 dfd.reject("error occured");
             });
            
            return dfd.promise;
        }
        
    }
    
        // retriving common module
    angular.module("common")
        // creating lookupService and passed to registerCtrl controller
    .service("lookupService",["$q","$http",lookupServiceFn]);
})();