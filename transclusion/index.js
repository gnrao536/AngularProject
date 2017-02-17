
    
    var app=angular.module("myapp",[]);
    
    
    // using ng-transclude
    app.directive("myDir",function(){
        
        return {
            templateUrl:"trans.html",
            transclude:true
        };
    });
    
    // using link function
    app.directive("mydir",function(){
        
        return {
            templateUrl:"trans1.html",
            transclude:true,
            link:function(scope,ele,attrs,controller,transclude){
                var content=transclude();
                ele.find("#tran").append(content);
            }
        };
    });
    
    
