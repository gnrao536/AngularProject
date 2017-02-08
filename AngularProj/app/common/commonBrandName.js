(function(){
    
    // creating named function and passed to cmBrandName directive
     function brandNameFn(){
         //  directive returns object
         return{
           template:' <a class="navbar-brand" href="#">{{hc.brandName}}</a>',
             
             /*
             compile:function(element,attr){
                 console.log(element);
                 console.log(attr);
                 return{
                     pre:function(scope,element,attr){
                         console.log(scope);
                         console.log(element);
                         console.log(attr);
                     },
                     post:function(scope,element,attr){
                         console.log(scope);
                         console.log(element);
                         console.log(attr);
                     }
                 }
             }     */
             link:function(scope,element,attr){
                 console.log(scope);
                 console.log(element);
                 console.log(attr);
             }
         };
     }
    
    
    // retriving   common module and  creating directive
    angular.module("common")
    .directive("cmBrandName",[brandNameFn]);
    
    
})();
