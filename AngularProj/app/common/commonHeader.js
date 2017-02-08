(function () {
        
         // creating named function and passed to cmHeader directive
        function cmHeaderFn(){
            // directive returns object
          return {
           templateUrl:"app/header/header.tpl.html",
              restrict:"A,C,E"   // A->Attribute C->Class E->Element M-> Comment  
          } ;   
        
        }
        
        // retriving common module  and  creating directive
        angular.module("common")
            .directive("cmHeader", [cmHeaderFn]);
    }
)();