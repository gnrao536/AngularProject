(function(){
    
        // module creation and injecting dependency modules
        //first parameter: Module Name
        //second parameter: module names injected.
    
    angular.module("goodServices",["ui.bootstrap","register","login","header","common","products","post"]);
    
        // retriving goodServices module
    angular.module("goodServices")
    .run(function(){
        console.log("good services RUN ");
    })
    .config(function(initProvider){
        console.log("good services CONFIG");
    })
    .provider("init",function(){
        console.log("good services PROVIDER");
        this.$get=function(){}
    });
    
})();