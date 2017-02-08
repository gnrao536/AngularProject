(function(){
    
     // creating named function and passed to productsSvc service as callback
    function productsSvcFn($http,$q){
        
        this.getProducts=function(){
            
            // creating deferred object
          var deferred=$q.defer();
            
            // making http call
            $http.get("api/products.json")
            .then(function(res){
                deferred.resolve(res);
            })
            .catch(function(err){
                deferred.reject(err);
            })
            return deferred.promise;
        };
    }
    
    // retriving products module
    angular.module("products")
    // creating service and passed to productsCtrl  controller
    .service("productsSvc",["$http","$q",productsSvcFn]);
})();