(function(){
    
    // creating named function and passed to productsFac   factory
    function productsFacFn($http,$q){
        
        return {
            getProducts:function () {
                    
                    // creating deferred object
                    var dfd = $q.defer();
                    //making http call
                    $http.get("api/products.json")
                        .then(function (response) {
                            dfd.resolve(response);
                        })
                        .catch(function (errResponse) {
                            dfd.reject(errResponse);
                        });

                    return dfd.promise;
            }
        }
    }
    
    //  reriving products module
    angular.module("products")
    .factory("productsFac",["$http","$q",productsFacFn]);
})();