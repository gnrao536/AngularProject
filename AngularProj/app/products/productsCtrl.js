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
        
        // products filters code
               vm.minimumProducts=10;
        vm.showMore = function(){
          vm.minimumProducts+=10;  
        }; 
        vm.orderByCrietria="Price";
        vm.orderByPrice = function(){
            if( vm.orderByCrietria=="Price"){
                vm.orderByCrietria="-Price";
            }
            else{
                 vm.orderByCrietria="Price";
            }
        }
        
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