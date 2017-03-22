(function(){
    
    function myCtrlfn($scope){
        $scope.user={};
        
        $scope.states = ('AP TN MP KA UP MA ' +
    'WY').split(' ').map(function(state) {
        return {abbrev: state};
      });
        
    }
    
    
    
    var app=angular.module("myApp",['ngMaterial','ngMessages']);
    
    app.controller("myCtrl",['$scope',myCtrlfn]);
    
    
})();