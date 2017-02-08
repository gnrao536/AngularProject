(function(){
    
    // creating named function and passed to productsCtrl controller as callback

    function productsCtrl(productsSvc){
        var vm=this;
        
        productsSvc.getProducts()
        .then(function(response){
            console.log(response);
            vm.products=response.data.products;
            
        })
        .catch(function(error){
            console.log(error);
        });
        
    }
    
    // retriving products module
    angular.module("products")
    
            // To get products use productsSvc service  or productsFac factory  
    .controller("productsCtrl",["productsSvc",productsCtrl]);
})();


    //  injecting Dependencies  (inject productsSvc into controller) using  $inject

/*    productsCtrl.$inject = ['productsSvc'];
    angular.module("products")
    .controller("productsCtrl",productsCtrl);   */