(function(){
    function homeCtrlfn($scope,$state){
        $scope.fname="home controller";
        $scope.goLogin=function(){
            
            $state.go("login",{data:"Login success"});  //  $state.go()  used to navigate one page to another page
                
            
        };                                          
        
    }
    
    
    angular.module("home")
    .controller("homeCtrl",["$scope","$state",homeCtrlfn]);
})();