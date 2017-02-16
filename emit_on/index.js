(function(){
    
    var app=angular.module("myapp",[]);
    
    app.controller("parentCtrl",function($scope){
        $scope.$on("myevent",function(event,args){
            $scope.message=args.message;
            console.log($scope.message);
        });
        
    });
    
        app.controller("childCtrl",function($scope){
            $scope.doEmit=function(msg){
                $scope.$emit("myevent",{message:msg});
            };
        
    });
})();