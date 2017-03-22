(function(){
    
    function registerCtrlfn($scope){
        $scope.fname="Register controller";
        
        
    }
    
    angular.module("register")
    .controller("registerCtrl",["$scope",registerCtrlfn]);
})();