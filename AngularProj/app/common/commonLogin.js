(function(){
    
    // creating named function and passed to cmLogin directive
    function cmLoginFn(){
        
        return{
            controller:"loginCtrl as lc",
            restrict:"A",
            link:function(scope,element,attrs){
                console.log(scope);
            }
        };
    }
    
    // retriving common module  and  creating directive
    angular.module("common")
    .directive("cmLogin",[cmLoginFn]);
})();