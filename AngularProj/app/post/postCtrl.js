(function(){
    
    // creating named function and passed to postCtrl controller
    function postCtrl($scope){
        
        // passing template dynamically
         $scope.type=["image"];
        $scope.url="../images/1.png";
        
    }
    // retriving  post module and creating controller
    angular.module("post")
    .controller("postCtrl",["$scope",postCtrl])
})();