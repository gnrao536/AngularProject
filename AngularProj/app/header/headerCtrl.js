(function(){
        // creating named function and passed to  headerCtrl controller as callback
    function headerCtrl($scope){
        var vm = this;
        vm.brandName = "Good Services Proj";
        vm.navItems = ["Login","Register","Products","Cart","Post"];
        vm.loginTemplate = "app/login/login.tpl.html";
        vm.registerTemplate = "app/register/register.tpl.html";
        vm.productsTemplate = "app/products/products.tpl.html";
        vm.postTemplate = "app/post/post.tpl.html";
        
        
        // creating loadView() function and  passed on ng-click  diretive in header.tpl.html
        vm.loadView = function(param){
            console.log(param);
            
            if(param=="Login"){
                vm.loadTemplate=vm.loginTemplate;
            }
            else if(param=="Register"){
                vm.loadTemplate=vm.registerTemplate;
            }
            else if(param=="Products"){
                vm.loadTemplate=vm.productsTemplate;
            } 
            else if(param=="Post"){
                vm.loadTemplate=vm.postTemplate;
            } 
        };
        
       
        
    }
    
        // retriving  header module
    angular.module("header")
    
        // creating headerCtrl   controller
    .controller("headerCtrl",["$scope",headerCtrl]);
})();