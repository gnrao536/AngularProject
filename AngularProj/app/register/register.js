(function(){
        // creating register module
    angular.module("register",[]);
    
        // retriving register module
    angular.module("register")
    .run(function(){
        console.log("Register RUN");
    })
    .config(function(){
        console.log("Register CONFIG");
    });
})();