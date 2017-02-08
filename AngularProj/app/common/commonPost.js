(function(){
    
    // creating named function and passed to cmPost directive
    function cmPost($compile){
        return{
            link:function(scope,element,attrs){
                var snoppet="";
                
                if (scope.type[0] == "video") {
        snippet = '<video width="400" controls><source src="{{url}}" type="video/mp4"></video>';

                } else if (scope.type[0] == "image") {
                    snippet = '<img src="{{url}}">';
                }
                var compileOutput = $compile(snippet);
                var content = compileOutput(scope);
                element.append(content);
            }
        };
    }
    // retriving common module
    angular.module("common")
    .directive("cmPost",["$compile",cmPost]);
    
})();