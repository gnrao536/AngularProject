(function(){
    var app=angular.module("myapp",[]);
    
    app.controller("myctrl",function($scope,$parse,$interpolate){
        $scope.a=10;
        $scope.b=20;
        
        $scope.city="Amaravati";
        
        $scope.doEval=function(){
            
            //$eval is scope method that executes expression on current scope
            
            
          // alert("Result :"+ ($scope.a+$scope.b));
            // alert("Result :"+ $scope.$eval("a*b"));
            
            // alert("Result :"+ $scope.$eval("a*b*3"));
            // alert("Result :"+ $scope.$eval("a*b*c",{c:5}));
              alert("Result :"+ $scope.$eval("a*b*c",{c:5,a:2,b:10}));
        };
        
        $scope.doParse=function(){
            
            // $parse is not scope method that executes expression globally (current scope and rootscope)
            
            //var f=$parse("a*b");  // returns function
            //var r1=f($scope);
            //alert("result :"+ r1);
            
            //var r2=f({a:5,b:50});
            //alert("result :"+ r2);
            
           // alert("Result is:"+$parse("a*b")($scope));
            //alert("Result is:"+$parse("a*b")({a:5,b:10}));
            //alert("Result is:"+$parse("city")($scope));
            alert("Result is:"+$parse("city").assign($scope,"Ongole"));
        };
        
        $scope.doInterpolate=function(){
            
            //$interpolate is not scope method that executes expression with interpolation function {{}} remains same as $parse
            
            //var f=$interpolate("{{a*b}}");
            //var r=f($scope);
            //alert("Result :"+r);
            
            
            //var f=$interpolate("Result is: {{a*b}} and other result is {{a*b*3}}");
            //var r=f($scope);
            //alert(r);
            
            alert($interpolate("Result is :{{a*b}}")($scope));
            
        };
        
        
    });
})();