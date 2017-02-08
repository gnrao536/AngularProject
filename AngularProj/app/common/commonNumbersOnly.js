(function(){
    
     // creating named function and passed to cmNumbersOnly directive
    function cmNumbersOnlyFn(){
        return{
            restrict:"A",
            link:function(scope,element,attrs){
                var lengthOfNumbers=attrs["maxnumbers"];
                element.bind("keypress",function(e){
                    if(e.keyCode>=48  && e.keyCode<=57  && this.value.length<lengthOfNumbers){
                        
                    }
                    else{
                        e.preventDefault();
                    }
                });
            }
        };
        
    }
    
    //  retriving common module   and creating directive
    angular.module("common")
    .directive("cmNumbersOnly",[cmNumbersOnlyFn]);
})();