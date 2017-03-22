(function(){
    angular.module("myApp", ["ngRoute","login"]);
    
    angular.module("myApp")
.config(function($routeProvider) {
    
        // adding templateUrl
    var home={templateUrl : "app/home/home.tpl.html"};
        
        //  adding controller
    var login={templateUrl : "app/login/login.tpl.html",controller:"loginCtrl"};
        
        //  adding template 
    var register={template : "<h3>Register Template</h3>"}
    
        
    $routeProvider.when("/home",home);
    $routeProvider.when("/login",login );
    $routeProvider.when("/register", register);
        
        // Default 
    $routeProvider.otherwise({template:"<h3>Default page</h3>"});
});
})();