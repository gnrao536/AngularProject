(function(){
    
    
    var app=angular.module("myapp",[]);
    
    app.controller("myctrl",function($scope){
        $scope.fname="Nageswar rao";
        
        $scope.doShow=function(){alert("& is success");};
         
    });
    
    // inherited scope
    app.directive("iso",function(){
        return {
            template:"<h2>First name is :{{fname}}</h2>"
        };
    });
    
    //  isolted scope with scope:{}
    app.directive("iso1",function(){
        return {
            template:"<h2>First name is :{{fname}}</h2>",
            scope:{}
        };
    });
    // isolated scope with @
    app.directive("iso2",function(){
        return{
            template:"<h2>First name is:{{firstName}}</h2>",
            scope:{
                firstName:'@'  // one way binding
            }
        };
    });

    // isolated scope with @ alias name
    app.directive("iso3",function(){
        return{
            template:'<div><h2>First name is:{{firstName}}</h2><input type="text" ng-model="firstName"></div>',
            scope:{
                firstName:'@fn'
            }
        };
    });
    
    // isolated scope with =
    app.directive("iso4",function(){
        return{
            template:'<div><h2>First name is:{{firstName}}</h2><input type="text" ng-model="firstName"></div>',
                        
            scope:{
                firstName:'='   //  two way binding
            }
        };
    });
    
    
    // isolated scope with &
   app.directive("iso5",function(){
        return{
            template:'<button ng-click="done()">Click</button>',
                        
            scope:{
                done:'&'   //  two way binding
            }
        };
    });
    

    
})();