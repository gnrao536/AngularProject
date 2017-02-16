(function(){
    
    var app=angular.module("myapp",[]);
    
    
     app.controller("parentCtrl",function($scope){
            $scope.doBroadcast=function(msg){
                $scope.$broadcast("myevent",{message:msg});
            };
        
    });
    
    
    
    app.controller("childCtrl",function($scope){
        $scope.$on("myevent",function(event,args){
            $scope.message=args.message;
            console.log($scope.message);
        });
        
    });
    
       
})();