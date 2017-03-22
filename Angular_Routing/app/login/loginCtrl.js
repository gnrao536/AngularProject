(function(){
    
function loginCtrl($scope){
    $scope.fname="Login details";
}
    angular.module("login")
    .controller("loginCtrl",["$scope",loginCtrl]);
})();