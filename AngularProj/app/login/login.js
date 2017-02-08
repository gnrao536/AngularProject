(function(){
    
    angular.module("login",[]);
    
    
    angular.module("login")
    .run(function(){
        console.log("Login RUN");
    })
    .config(function(){
        console.log("Login CONFIG");
    });
})();